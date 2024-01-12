import { type CourseGoal as CGoal } from '../App';
// type 사용시 이름 중복이 있다면 as를 사용하여 이름을 변경할 수 있다.
import CourseGoal from './CourseGoal';

type CourseGoalListProps = {
  goals: CGoal[];
};

export default function CourseGoalList({ goals }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>{goal.description}</CourseGoal>
        </li>
      ))}
    </ul>
  );
}
