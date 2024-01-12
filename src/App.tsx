import { useState } from 'react';
import goalsImg from './assets/goals.jpg';
import CourseGoal from './components/CourseGoal';
import Header from './components/Header';

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal = {
        id: Math.random(),
        title: 'Master React',
        description: 'Finish the course and learn React',
      };
      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goal</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>{goal.description}</CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  );
}
