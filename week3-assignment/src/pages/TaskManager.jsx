import { useState, useEffect } from 'react';
import Card from '../components/Card';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [input, setInput] = useState('');

  useEffect(() => {
    //Load from localStorage or API
  }, []);

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const filteredTasks = tasks.filter((task) =>
    filter === 'all' ? true :
    filter === 'active' ? !task.completed :
    filter === 'completed' ? task.completed :
    true
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 text-gray-900 dark:text-white">

      {/* Input and Add Button */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
          className="flex-grow px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 focus:outline-none"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-3 mb-6 text-sm">
        {['all', 'active', 'completed'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-3 py-1 rounded ${
              filter === type
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Task List */}
      <div className="space-y-4">
        {filteredTasks.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No tasks found.</p>
        ) : (
          filteredTasks.map((task, index) => (
            <Card key={index}>
              <div className="flex justify-between items-center">
                <div
                  className={`flex-1 ${
                    task.completed ? 'line-through text-gray-400' : ''
                  }`}
                >
                  {task.text}
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => toggleTask(index)}
                    className="text-green-500 hover:text-green-700"
                  >
                    {task.completed ? 'Undo' : 'Done'}
                  </button>
                  <button
                    onClick={() => deleteTask(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

export default TaskManager;
