const initialState = {
    tasks: [],
    filter: 'ALL' // Default filter
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        };
  
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.id
              ? { ...task, isDone: !task.isDone }
              : task
          )
        };
  
      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload.filter
        };
  
      default:
        return state;
    }
  };
  
  export default taskReducer;
  