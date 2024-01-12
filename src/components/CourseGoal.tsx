// interface CourseGoalProps {
//   title: string;
//   children: React.ReactNode;
// }

import { PropsWithChildren } from 'react';

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>; // 제네릭타입으로 title을 추가하여 사용할 수 있다.

export default function CourseGoal({
  title,
  children,
  onDelete,
  id,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
      </div>
      <p>{children}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}
