import React, { useState } from 'react';

const AddTaskForm = ({ onAdd }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (taskName.trim()) {
      onAdd(taskName);
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={event => setTaskName(event.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
