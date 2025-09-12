// pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth} from "../components/AuthContext"
import LoginPage from '../components/Loggin';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
const data = {
  "user": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "email": "user@example.com",
    "name": "John Doe",
    "avatar": "https://example.com/avatars/john-doe.jpg",
    "role": "premium_user",
    "isEmailVerified": true,
    "createdAt": "2023-01-15T10:30:00Z",
    "XP": 0,
    "lastLogin": "2023-10-20T14:25:00Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "preferences": {
    "theme": "dark",
    "language": "en",
    "notifications": {
      "email": true,
      "push": false,
      "sms": true
    }
  },
  "subscription": {
    "plan": "premium",
    "status": "active",
    "billingCycle": "monthly",
    "nextBillingDate": "2023-11-15T00:00:00Z"
  }
}
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // try {
      // Replace with your actual authentication API call
    //   const response = await fetch('/api/auth/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   const data = await response.json();

      if (email === "sm@w.com" && password === "123456") {
        login(data.user, data.token);
        navigate('/profile');
      } else {
        setError(data.message || 'Login failed');
      }
    // } catch (err) {
    //   setError('An error occurred during login');
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    // <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    //   <div className="max-w-md w-full space-y-8">
    //     <div>
    //       <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
    //         Sign in to your account
    //       </h2>
    //     </div>
    //     <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
    //       {error && (
    //         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
    //           {error}
    //         </div>
    //       )}
    //       <div className="rounded-md shadow-sm -space-y-px">
    //         <div>
    //           <input
    //             type="email"
    //             required
    //             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
    //             placeholder="Email address"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //         </div>
    //         <div>
    //           <input
    //             type="password"
    //             required
    //             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
    //             placeholder="Password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //         </div>
    //       </div>

    //       <div>
    //         <button
    //           type="submit"
    //           disabled={loading}
    //           className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
    //         >
    //           {loading ? 'Signing in...' : 'Sign in'}
    //         </button>
    //       </div>

    //       <div className="text-center">
    //         <Link
    //           to="/register"
    //           className="text-blue-600 hover:text-blue-500 text-sm"
    //         >
    //           Don't have an account? Sign up
    //         </Link>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <LoginPage/>


  );
};

export default Login;