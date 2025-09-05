// hooks/useAuthCheck.js
import { useEffect } from 'react';
import { useAuth } from '../components/AuthContext';

export const useAuthCheck = () => {
  const { user, loading } = useAuth();
  
  return {
    isAuthenticated: !!user,
    isLoading: loading,
    user
  };
};