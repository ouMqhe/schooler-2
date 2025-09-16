

// App.jsx
import './App.css'
import { Link, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';

// Public components
// import Home from './pages/Home';
// import About from './pages/About';
import Login from './pages/Login';
// import Register from './pages/Register';
import NoteViewer from './pages/NoteViewer';
import MyCV from './pages/MyResume';
import NoteWSlug from './components/NoteWSlug';
// Protected components
import Dashboard from './pages/Dashboard';
// import Settings from './pages/Settings';
import Navibar from './components/NaviBar';
function App() {
  return (
    <AuthProvider>

        <div>
          <div className='pb-20'><Navibar/></div>
      
           <hr />
          <Routes>
            {/* Public routes */}
            
            <Route path="/" element={
              <PublicRoute>
                <NoteViewer />
              </PublicRoute>
            } />
            <Route path="/login" element={
              <PublicRoute restricted={true}>
                <Login />
              </PublicRoute>
            } />
            <Route path="/notes/:slug" element={
              <PublicRoute>
                {/* <MyCV /> */}
                <NoteWSlug />
              </PublicRoute>
            } />

            {/* Protected routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/maker" element={
              <PublicRoute>
                <MyCV />
              </PublicRoute>
            } />
            {/* <Route path="/settings" element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            } /> */}

            {/* 404 route */}
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900">404</h1>
                  <p className="text-gray-600 mt-2">Page not found</p>
                </div>
              </div>
            } />
          </Routes>
        </div>
    </AuthProvider>
  );
}

export default App;