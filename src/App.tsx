import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import Login from './pages/Login';
import Profiles from './pages/Profiles';
import CreateProfile from './pages/CreateProfile';
import ManageProfiles from './pages/ManageProfiles';
import Browse from './pages/Browse';
import MyList from './pages/MyList';
import Search from './pages/Search';

const AppLayout = () => {
  const location = useLocation();
  
  // Update logic: Hide footer on login AND any path starting with /profiles
  const showFooter = location.pathname !== '/login' && !location.pathname.startsWith('/profiles');

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="flex-grow">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profiles" element={<ProtectedRoute><Profiles /></ProtectedRoute>} />
          <Route path="/profiles/create" element={<ProtectedRoute><CreateProfile /></ProtectedRoute>} />
          <Route path="/profiles/manage" element={<ProtectedRoute><ManageProfiles /></ProtectedRoute>} />
          <Route path="/browse" element={<ProtectedRoute requireProfile><Browse /></ProtectedRoute>} />
          <Route path="/my-list" element={<ProtectedRoute requireProfile><MyList /></ProtectedRoute>} />
          <Route path="/search" element={<ProtectedRoute requireProfile><Search /></ProtectedRoute>} />
          <Route path="/" element={<Navigate to="/browse" replace />} />
        </Routes>
      </div>
      {showFooter && <Footer />}
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <AppLayout />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;