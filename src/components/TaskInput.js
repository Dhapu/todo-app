import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/action';
import { TextField, Button, Box } from '@mui/material';
import './TaskInput.css';

const TaskInput = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (task.trim()) {
            dispatch(addTask(task));
            setTask('');
        }
    };

    return (
        <Box className="add-task-container">
            <TextField
                label="New Task"
                variant="outlined"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleAddTask();
                    }
                }}
                fullWidth
            />
            <Button variant="contained" color="primary" onClick={handleAddTask}>
                Add Task
            </Button>
        </Box>
    );
};

export default TaskInput;
