import { useState } from "react";

export default function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { username, password, rememberMe });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form */}
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

          {/* Sign In Heading */}
          <h1 className="text-lg font-medium text-gray-900 mb-8">Sign In</h1>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div>
              <input
                type="text"
                placeholder="Username"
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
                placeholder="Password"
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
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
            >
              Sign In
            </button>
          </form>

          {/* Additional Options */}
          <div className="mt-6 text-center space-y-3">
            <div>
              <button
                type="button"
                className="text-blue-600 text-sm hover:text-blue-700 hover:underline focus:outline-none"
                onClick={() => console.log("Create new account clicked")}
              >
                Create new account
              </button>
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

      {/* Right side - Geometric Pattern Background */}
      <div className="flex-1 bg-gradient-to-br from-blue-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0">
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="geometric-pattern"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <polygon
                  points="50,0 100,50 50,100 0,50"
                  fill="rgba(59, 130, 246, 0.05)"
                  stroke="rgba(59, 130, 246, 0.1)"
                  strokeWidth="0.5"
                />
                <polygon
                  points="25,25 75,25 75,75 25,75"
                  fill="rgba(59, 130, 246, 0.03)"
                  stroke="rgba(59, 130, 246, 0.08)"
                  strokeWidth="0.3"
                />
              </pattern>
              <linearGradient id="main-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(219, 234, 254, 0.8)" />
                <stop offset="50%" stopColor="rgba(243, 244, 246, 0.9)" />
                <stop offset="100%" stopColor="rgba(229, 231, 235, 0.8)" />
              </linearGradient>
            </defs>
            
            <rect width="100%" height="100%" fill="url(#main-gradient)" />
            <rect width="100%" height="100%" fill="url(#geometric-pattern)" />
            
            {/* 3D-like geometric shapes */}
            <g opacity="0.6">
              <polygon
                points="600,100 700,50 750,150 650,200"
                fill="rgba(59, 130, 246, 0.1)"
                stroke="rgba(59, 130, 246, 0.2)"
                strokeWidth="1"
              />
              <polygon
                points="650,200 750,150 800,250 700,300"
                fill="rgba(59, 130, 246, 0.08)"
                stroke="rgba(59, 130, 246, 0.15)"
                strokeWidth="1"
              />
              <polygon
                points="500,300 600,250 650,350 550,400"
                fill="rgba(59, 130, 246, 0.12)"
                stroke="rgba(59, 130, 246, 0.18)"
                strokeWidth="1"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
