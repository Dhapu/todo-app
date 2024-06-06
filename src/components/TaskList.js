import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, updateTask, toggleTask } from '../redux/actions/action';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, TextField, Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import './TaskList.css';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const dispatch = useDispatch();
    const [editTask, setEditTask] = useState('');
    const [editMode, setEditMode] = useState(null);

    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    };

    const handleEdit = (id) => {
        dispatch(updateTask(id, editTask));
        setEditTask('');
        setEditMode(null);
    };
    const handleToggle = (id) => {
        dispatch(toggleTask(id));
    };

    return (
        <List className="task-list">
            {tasks.map((task) => (
                <ListItem key={task.id} className={`list-item ${task.completed ? 'completed' : ''}`}>
                    {editMode === task.id ? (
                        <Box className="edit-box">
                            <TextField
                                label="Edit Task"
                                variant="outlined"
                                value={editTask}
                                onChange={(e) => setEditTask(e.target.value)}
                                fullWidth
                            />
                            <Button variant="contained" color="primary" onClick={() => handleEdit(task.id)}>
                                Save
                            </Button>
                        </Box>
                    ) : (
                        <>
                            <ListItemText primary={task.text} className="list-item-text" />
                            <ListItemSecondaryAction className="list-item-buttons">
                            <IconButton onClick={() => handleDelete(task.id)} sx={{ color: 'red' }}>
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton onClick={() => { setEditTask(task.text); setEditMode(task.id); }} sx={{ color: 'black' }}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={() => handleToggle(task.id)}>
                                <CheckIcon style={{ color: task.completed ? 'green' : 'inherit' }} />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </>
                    )}
                </ListItem>
            ))}
        </List>
    );
};

export default TaskList;