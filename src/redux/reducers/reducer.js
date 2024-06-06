const initialState = {
    tasks: []
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            const newTask = {
                id: action.payload.id,
                text: action.payload.text,
                completed: action.payload.completed
            };
            return {
                ...state,
                tasks: [...state.tasks, newTask]
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        case 'UPDATE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? { ...task, text: action.payload.newText } : task
                )
            };
        case 'TOGGLE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload ? { ...task, completed: !task.completed } : task
                )
            };
        default:
            return state;
    }
};

export default taskReducer;
