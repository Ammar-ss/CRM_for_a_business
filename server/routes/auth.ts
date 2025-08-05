import { RequestHandler } from "express";
import { RegisterRequest, LoginRequest, AuthResponse } from "@shared/auth";
import { UserDatabase } from "../database";

export const handleRegister: RequestHandler = async (req, res) => {
  try {
    const { username, email, password }: RegisterRequest = req.body;

    // Validation
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Username, email, and password are required"
      } as AuthResponse);
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long"
      } as AuthResponse);
    }

    // Check if user already exists
    const existingUserByUsername = await UserDatabase.findUserByUsername(username);
    if (existingUserByUsername) {
      return res.status(400).json({
        success: false,
        message: "Username already exists"
      } as AuthResponse);
    }

    const existingUserByEmail = await UserDatabase.findUserByEmail(email);
    if (existingUserByEmail) {
      return res.status(400).json({
        success: false,
        message: "Email already exists"
      } as AuthResponse);
    }

    // Create new user
    const newUser = await UserDatabase.createUser({
      username,
      email,
      password // In production, hash this password
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email
      }
    } as AuthResponse);

  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    } as AuthResponse);
  }
};

export const handleLogin: RequestHandler = async (req, res) => {
  try {
    const { username, password }: LoginRequest = req.body;

    // Validation
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required"
      } as AuthResponse);
    }

    // Validate user credentials
    const user = await UserDatabase.validateUser(username, password);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password"
      } as AuthResponse);
    }

    // In production, generate a proper JWT token
    const token = `token_${user.id}_${Date.now()}`;

    res.json({
      success: true,
      message: "Login successful",
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      },
      token
    } as AuthResponse);

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    } as AuthResponse);
  }
};
