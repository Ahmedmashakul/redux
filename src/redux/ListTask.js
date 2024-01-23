import React from 'react';

const ListTask = ({ tasks, onToggleTask, onFilterChange, filter }) => {
  return (
    <div>
      <div>
        Filter:
        <button onClick={() => onFilterChange('ALL')} disabled={filter === 'ALL'}>All</button>
        <button onClick={() => onFilterChange('DONE')} disabled={filter === 'DONE'}>Done</button>
        <button onClick={() => onFilterChange('NOT_DONE')} disabled={filter === 'NOT_DONE'}>Not Done</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
              {task.description}
            </span>
            <button onClick={() => onToggleTask(task.id)}>Toggle</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTask;