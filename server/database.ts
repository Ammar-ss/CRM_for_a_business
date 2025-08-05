import { User } from "@shared/auth";
import fs from "fs";
import path from "path";

const DB_FILE = path.join(process.cwd(), "users.json");

// Initialize database file if it doesn't exist or is empty
if (!fs.existsSync(DB_FILE)) {
  const defaultUsers: User[] = [
    {
      id: "admin-default",
      username: "admin",
      email: "admin@ammar.com",
      password: "123",
      createdAt: new Date().toISOString()
    }
  ];
  fs.writeFileSync(DB_FILE, JSON.stringify(defaultUsers, null, 2));
} else {
  // Check if file is empty and seed if needed
  const data = fs.readFileSync(DB_FILE, "utf-8");
  const users = JSON.parse(data) as User[];
  if (users.length === 0) {
    const defaultUsers: User[] = [
      {
        id: "admin-default",
        username: "admin",
        email: "admin@ammar.com",
        password: "123",
        createdAt: new Date().toISOString()
      }
    ];
    fs.writeFileSync(DB_FILE, JSON.stringify(defaultUsers, null, 2));
  }
}

export class UserDatabase {
  private static getUsers(): User[] {
    try {
      const data = fs.readFileSync(DB_FILE, "utf-8");
      return JSON.parse(data) as User[];
    } catch {
      return [];
    }
  }

  private static saveUsers(users: User[]): void {
    fs.writeFileSync(DB_FILE, JSON.stringify(users, null, 2));
  }

  static async findUserByUsername(username: string): Promise<User | null> {
    const users = this.getUsers();
    return users.find(user => user.username === username) || null;
  }

  static async findUserByEmail(email: string): Promise<User | null> {
    const users = this.getUsers();
    return users.find(user => user.email === email) || null;
  }

  static async createUser(userData: Omit<User, "id" | "createdAt">): Promise<User> {
    const users = this.getUsers();
    const newUser: User = {
      id: Date.now().toString(),
      ...userData,
      createdAt: new Date().toISOString(),
    };
    
    users.push(newUser);
    this.saveUsers(users);
    return newUser;
  }

  static async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.findUserByUsername(username);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }
}
