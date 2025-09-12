

// App.jsx
import './App.css'
import Navi from './components/Navbar';
import React from 'react';
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

// Protected components
import Dashboard from './pages/Dashboard';
import Quizzer from './pages/Quizzer';
// import Settings from './pages/Settings';
import Navibar from './components/NaviBar';
function App() {
  return (
    <AuthProvider>

      {/* <Router> */}
        <div>
          {/* <ResponsiveAppBar/> */}
          <div className='pb-20'><Navibar/></div>
                {/* <nav>
             <ul>
               <li>
                 <Link to="/about">Home</Link>
               </li>
               <li>
                 <Link to="/profile">Quizzer</Link>
               </li>
               <li>
                 <Link to="/dashboard">Dashboard</Link>
               </li>
             </ul>
           </nav> */}
      
           <hr />
          <Routes>
            {/* Public routes */}
            {/* <Route path="/" element={
              <PublicRoute>
                <Quizzer />
              </PublicRoute>
            } /> */}
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
            {/* <Route path="/register" element={
              <PublicRoute restricted={true}>
                <Register />
              </PublicRoute>
            } /> */}

            {/* Protected routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/quizz" element={
              <ProtectedRoute>
                <Quizzer />
              </ProtectedRoute>
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
      {/* </Router> */}
    </AuthProvider>
  );
}

export default App;