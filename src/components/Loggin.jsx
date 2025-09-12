import React, { useState } from 'react';
import {
  Card,
  Grid,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  Typography,
  Box,
  Divider
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
  Person
} from '@mui/icons-material';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth} from "../components/AuthContext"
const LoginPage = () => {
  
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
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

 
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
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #a6baf04d 0%, #f0ee9c71 100%)',
        p: 2
      }}
    >
      <Card
        sx={{
          maxWidth: 900,
          width: '100%',
          borderRadius: 3,
          overflow: 'hidden',
          boxShadow: '0 15px 35px rgba(44, 27, 27, 0.1)'
        }}
      >
        <Grid container>
          {/* Left side - Welcome section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              background: 'linear-gradient(135deg, #aecae6ff 0%, #beb59280 100%)',
              color: 'white',
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Box>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Hello!
              </Typography>
              <Typography variant="h5" fontWeight="medium" gutterBottom sx={{ mb: 3 }}>
                BYO Teacher Login
              </Typography>
              <Typography variant="body2" sx={{ color: '#e3f2fd', lineHeight: 1.6, mb: 4 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut sense ad minim quis nostruds.
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2
                  }}
                >
                  <Person sx={{ color: 'white' }} />
                </Box>
                <Typography variant="body2">Signed in</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right side - Login form */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom color="primary">
              Sign In
            </Typography>
            <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
              Enter your credentials to access your account
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email color="primary" />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      }
                    }}
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock color="primary" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      }
                    }}
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                      <FormControlLabel
                        control={
                          <Checkbox 
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleChange}
                            color="primary"
                          />
                        }
                        label="Remember me"
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        variant="text"
                        color="primary"
                        size="small"
                      >
                        Forgot password?
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                
                <Grid item xs={12}>
                  {/* <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{
                      py: 1.5,
                      borderRadius: 2,
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      background: 'linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)',
                    }}
                  >
                    Sign In
                  </Button> */}
                <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
                </Grid>
              </Grid>
            </form>
            
            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" color="text.secondary">
                OR
              </Typography>
            </Divider>
            
            <Grid container justifyContent="center">
              <Grid item>
                <Typography variant="body2" color="text.secondary">
                  Don't have an account?{' '}
                  <Button
                    variant="text"
                    color="primary"
                    size="small"
                  >
                    Sign up
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default LoginPage;