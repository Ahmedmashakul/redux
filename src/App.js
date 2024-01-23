import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleTask, setFilter } from './redux/actions';

import AddTask from './redux/AddTask';
import ListTask from './redux/ListTask';

const App = () => {
  const tasks = useSelector(state => state.tasks);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleAddTask = (id, description) => {
    dispatch(addTask(id, description));
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'ALL') {
      return true;
    } else if (filter === 'DONE') {
      return task.isDone;
    } else {
      return !task.isDone;
    }
  });

  return (
    <div>
      <AddTask onAddTask={handleAddTask} />
      <ListTask
        tasks={filteredTasks}
        onToggleTask={handleToggleTask}
        onFilterChange={handleFilterChange}
        filter={filter}
      />
    </div>
  );
};

export default App;