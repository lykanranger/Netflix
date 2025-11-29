import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import LoadingSpinner from './LoadingSpinner';

type ProtectedRouteProps = {
  children: React.ReactNode;
  requireProfile?: boolean;
};

export default function ProtectedRoute({ children, requireProfile = false }: ProtectedRouteProps) {
  const { user, profile, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requireProfile && !profile) {
    return <Navigate to="/profiles" replace />;
  }

  return <>{children}</>;
}
