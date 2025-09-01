import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginRequest, AuthResponse } from "@shared/auth";
import { COMPANY_INFO } from "../lib/constants";

export default function Index() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const loginData: LoginRequest = { username, password };

      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data: AuthResponse = await response.json();

      if (data.success && data.user && data.token) {
        // Store auth data
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Navigate to dashboard
        navigate("/dashboard");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form */}
      <div className="flex-1 flex items-center justify-center bg-white px-8 py-12">
        <div className="w-full max-w-sm">
          {/* Logo and Company Name */}
          <div className="mb-12 text-center">
            <img
              src={COMPANY_INFO.logo}
              alt={`${COMPANY_INFO.name} Logo`}
              className="h-48 object-contain mx-auto"
            />
          </div>

          {/* Sign In Heading */}
          <h1 className="text-lg font-medium text-gray-900 mb-8 text-center">
            Sign In
          </h1>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded text-sm">
                {error}
              </div>
            )}
            {/* Username Field */}
            <div>
              <input
                type="text"
                placeholder="Username (DEFAULT USERNAME = admin)"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-0 py-3 text-gray-900 placeholder-gray-500 border-0 border-b border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none focus:ring-0"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <input
                type="password"
                placeholder="Password (DEFAULT PASSWORD = 123)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-0 py-3 text-gray-900 placeholder-gray-500 border-0 border-b border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none focus:ring-0"
                required
              />
            </div>

            {/* Remember me checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium disabled:opacity-50"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* Additional Options */}
          <div className="mt-6 text-center space-y-3">
            <div>
              <Link
                to="/register"
                className="text-blue-600 text-sm hover:text-blue-700 hover:underline focus:outline-none"
              >
                Create new account
              </Link>
            </div>
            <div>
              <button
                type="button"
                className="text-gray-600 text-sm hover:text-gray-700 hover:underline focus:outline-none"
                onClick={() => console.log("Forgot password clicked")}
              >
                Forgot password?
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Background with Image */}
      <div className="flex-1 bg-gradient-to-br from-blue-50 to-gray-100 relative overflow-hidden flex items-center justify-center">
        <img
          src={COMPANY_INFO.heroImage}
          alt={`${COMPANY_INFO.name} Equipment`}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
