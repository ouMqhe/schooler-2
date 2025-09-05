// components/PublicRoute.jsx
import { useAuth } from './AuthContext';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children, restricted = false }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // If route is restricted and user is logged in, redirect to dashboard
  if (restricted && user) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default PublicRoute;