import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  LinearProgress,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper
} from '@mui/material';
import {
  Person,
  TrendingUp,
  Assignment,
  Event,
  CheckCircle,
  Schedule,
  Notifications,
  School
} from '@mui/icons-material';

const StudentDashboard = ({ user }) => {
  // Sample data for the dashboard
  const learningProgress = {
    completed: 40,
    total: 60,
    progress: 67
  };

  const dailyWorkplan = {
    distributes: 2,
    describes: 3
  };

  const tasks = [
    { id: 1, title: 'Revision of Sets Notes', description: 'Assessments work through plans complete your documentation.' },
    { id: 2, title: 'Redo older quizzes', description: 'It helps to refine skills you learnt before.' }
  ];

  const upcomingActivities = [
    { id: 1, title: 'Mid Year Exams', time: '9:30 AM', duration: '1:50 HR' },
    { id: 2, title: 'Group Session', time: '4:30 PM', duration: '2:00 HRS' }
  ];

  // Calendar data for January 2019
  const calendarDays = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 31, null, null, null]
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 3, backgroundColor: '#f5f7f9', minHeight: '100vh' }}>
      <Grid container spacing={3}>
        {/* Header Section */}
        <Grid item xs={12}>
          <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
              <Avatar 
                src={user.avatar} 
                sx={{ width: 64, height: 64, mr: 2 }}
              >
                {user.name.charAt(0)}
              </Avatar>
              <Box>
                <Typography variant="h4" component="h1" gutterBottom>
                  Welcome back, {user.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Here is your Learning Activity
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Divider sx={{ my: 2 }} />
        </Grid>

        {/* Learning Progress Section */}
        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: 2, boxShadow: 2, height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrendingUp sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6" component="h2">
                  YOUR LEARNING PROGRESS
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Keep up! You're doing great!
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', my: 3 }}>
                <Box sx={{ textAlign: 'center', mr: 4 }}>
                  <Typography variant="h3" component="div" color="primary">
                    {learningProgress.completed}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Credit: Completed
                  </Typography>
                </Box>
                
                <Box sx={{ flexGrow: 1 }}>
                  <LinearProgress 
                    variant="determinate" 
                    value={learningProgress.progress} 
                    sx={{ height: 12, borderRadius: 6 }}
                  />
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {learningProgress.progress}% completed
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Daily Workplan Section */}
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 2, boxShadow: 2, height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Assignment sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6" component="h2">
                  YOUR DAILY WORKPLAN
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Where you need to focus today
              </Typography>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-around', my: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" component="div" color="primary">
                    {dailyWorkplan.distributes}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    DISTRIBUTES
                  </Typography>
                  <Typography variant="caption" display="block" color="error">
                    DURANT / LATE
                  </Typography>
                </Box>
                
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" component="div" color="primary">
                    {dailyWorkplan.describes}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    DESCRIBES
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 4 }}>
                <Chip label="TASKS" variant="outlined" color="primary" />
                <Chip label="MEALS" variant="outlined" color="secondary" />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Tasks Section */}
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" component="h2" gutterBottom>
                Tasks
              </Typography>
              
              <List>
                {tasks.map(task => (
                  <ListItem key={task.id} sx={{ borderLeft: '4px solid', borderColor: 'primary.main', mb: 1, pl: 2 }}>
                    <ListItemIcon>
                      <CheckCircle color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={task.title}
                      secondary={task.description}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Calendar Section */}
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Event sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6" component="h2">
                  JANUARY 2019
                </Typography>
              </Box>
              
              <Grid container spacing={1} sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                  <Grid item xs={12/7} key={day}>
                    <Typography variant="body2">{day}</Typography>
                  </Grid>
                ))}
                
                {calendarDays.map((week, weekIndex) => (
                  <React.Fragment key={weekIndex}>
                    {week.map((day, dayIndex) => (
                      <Grid item xs={12/7} key={`${weekIndex}-${dayIndex}`}>
                        {day && (
                          <Paper 
                            elevation={day === 15 ? 2 : 0} 
                            sx={{ 
                              p: 1, 
                              backgroundColor: day === 15 ? 'primary.main' : 'transparent',
                              color: day === 15 ? 'white' : 'text.primary'
                            }}
                          >
                            <Typography variant="body2">{day}</Typography>
                          </Paper>
                        )}
                      </Grid>
                    ))}
                  </React.Fragment>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming Activities Section */}
        <Grid item xs={12}>
          <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Notifications sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6" component="h2">
                  WHAT'S COMING NEXT
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                This is your upcoming activity
              </Typography>
              
              <Grid container spacing={3} sx={{ mt: 1 }}>
                {upcomingActivities.map(activity => (
                  <Grid item xs={12} md={6} key={activity.id}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {activity.title}
                      </Typography>
                      <Box sx={{ display: 'flex', mt: 1 }}>
                        <Schedule sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
                        <Typography variant="body2" color="text.secondary">
                          TIME / {activity.time}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', mt: 1 }}>
                        <School sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
                        <Typography variant="body2" color="text.secondary">
                          DURATION / {activity.duration}
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

// Default user data if none is provided
StudentDashboard.defaultProps = {
  user: {
    id: "123e4567-e89b-12d3-a456-426614174080",
    email: "user@example.com",
    name: "John Doe",
    avatar: "https://example.com/avatars/john-doe.jpg",
    role: "premium_user",
    isEmailVerified: true,
    createdAt: "2023-01-15T10:30:002",
    XP: 0,
    lastLogin: "2023-10-20T14:25:002"
  }
};

export default StudentDashboard;