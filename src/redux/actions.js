export const addTask = (id, description) => ({
  type: 'ADD_TASK',
  payload: { id, description, isDone: false }
});

export const toggleTask = (id) => ({
  type: 'TOGGLE_TASK',
  payload: { id }
});

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  payload: { filter }
});
