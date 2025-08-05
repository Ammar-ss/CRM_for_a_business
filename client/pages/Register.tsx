import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterRequest, AuthResponse } from "@shared/auth";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validatePassword = (password: string): string | null => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    
    if (!/\d/.test(password)) {
      return "Password must contain at least 1 number";
    }
    
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return "Password must contain at least 1 special character";
    }
    
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate password requirements
    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      const registerData: RegisterRequest = {
        username: formData.username,
        email: formData.email,
        password: formData.password
      };

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(registerData)
      });

      const data: AuthResponse = await response.json();

      if (data.success) {
        setSuccess("Account created successfully! Redirecting to login...");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Registration Form */}
      <div className="flex-1 flex items-center justify-center bg-white px-8 py-12">
        <div className="w-full max-w-sm">
          {/* Logo and Company Name */}
          <div className="mb-12 text-center">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets%2F54f8588728e94fb0b8646e3f37922df0%2Fd7768f3705f94b159a78994f71c5676e?format=webp&width=800" 
              alt="AMMAR Industrial Corporation Logo" 
              className="h-48 object-contain mx-auto"
            />
          </div>

          {/* Create Account Heading */}
          <h1 className="text-lg font-medium text-gray-900 mb-8 text-center">Create Account</h1>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded text-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded text-sm">
                {success}
              </div>
            )}

            {/* Username Field */}
            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-0 py-3 text-gray-900 placeholder-gray-500 border-0 border-b border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none focus:ring-0"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-0 py-3 text-gray-900 placeholder-gray-500 border-0 border-b border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none focus:ring-0"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-0 py-3 text-gray-900 placeholder-gray-500 border-0 border-b border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none focus:ring-0"
                required
                minLength={8}
              />
              <div className="text-xs text-gray-500 mt-1">
                Minimum 8 characters, include 1 number and 1 special character
              </div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-0 py-3 text-gray-900 placeholder-gray-500 border-0 border-b border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none focus:ring-0"
                required
              />
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium disabled:opacity-50"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          {/* Back to Login */}
          <div className="mt-6 text-center">
            <Link
              to="/"
              className="text-gray-600 text-sm hover:text-gray-700 hover:underline focus:outline-none"
            >
              Already have an account? Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Right side - Background Image */}
      <div className="flex-1 bg-gradient-to-br from-blue-50 to-gray-100 relative overflow-hidden flex items-center justify-center">
        <img 
          src="https://cdn.builder.io/api/v1/image/assets%2F54f8588728e94fb0b8646e3f37922df0%2F18131d2f53ad4e7780e2c0e6abcabfe9?format=webp&width=800"
          alt="AMMAR Industrial Equipment"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
