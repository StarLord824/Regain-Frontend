import { useState } from 'react';
import { db } from '../../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const HabitForm = () => {
  const [task, setTask] = useState('');
  const [points, setPoints] = useState(0);

  const handleAddTask = async () => {
    try {
      await addDoc(collection(db, 'habits'), {
        task,
        points,
        completed: false,
        timestamp: serverTimestamp(),
      });
      setTask('');
      setPoints(0);
    } catch (err) {
      console.error("Error adding task: ", err);
    }
  };

  return (
    <div>
      <h2>Add Habit</h2>
      <input
        type="text"
        placeholder="Habit Name"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="number"
        placeholder="Points"
        value={points}
        onChange={(e) => setPoints(Number(e.target.value))}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default HabitForm;
