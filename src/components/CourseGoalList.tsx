import React from 'react';
import { type CourseGoal as CGoal } from '../App';
// type 사용시 이름 중복이 있다면 as를 사용하여 이름을 변경할 수 있다.
import CourseGoal from './CourseGoal';
import InfoBox from './InfoBox';

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">No goals were added yet!</InfoBox>;
  }

  let warningBox: React.ReactNode;

  if (goals.length > 4) {
    warningBox = <InfoBox mode="warning">Something went wrong!</InfoBox>;
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              {goal.description}
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
