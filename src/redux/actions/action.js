export const addTask = (text) => {
  return {
      type: 'ADD_TASK',
      payload: {
          id: new Date().getTime(),
          text,
          completed: false,
      },
  };
};

export const deleteTask = (id) => {
  return {
      type: 'DELETE_TASK',
      payload: id,
  };
};

export const updateTask = (id, newText) => {
  return {
      type: 'UPDATE_TASK',
      payload: {
          id,
          newText,
      },
  };
};

export const toggleTask = (id) => {
  return {
      type: 'TOGGLE_TASK',
      payload: id,
  };
};
