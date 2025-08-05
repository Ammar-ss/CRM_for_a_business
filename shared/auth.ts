export interface User {
  id: string;
  username: string;
  email: string;
  password: string; // In real app, this would be hashed
  createdAt: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  user?: {
    id: string;
    username: string;
    email: string;
  };
  token?: string;
}
