import React, { useState } from 'react';

const AddTask = ({ onAddTask }) => {
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    const id = new Date().getTime(); // Use a better ID generation method in a real app
    onAddTask(id, description);
    setDescription('');
  };

  return (
    <div>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
