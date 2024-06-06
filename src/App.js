import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css'; // Import the CSS file

const App = () => {
    return (
        <Container className="container">
            <Box className="header">
                <Typography variant="h4" gutterBottom>
                    To-Do App
                </Typography>
            </Box>
            <TaskInput />
            <Box className="task-list">
                <TaskList />
            </Box>
        </Container>
    );
};

export default App;
