// interface CourseGoalProps {
//   title: string;
//   children: React.ReactNode;
// }

import { PropsWithChildren } from 'react';

type CourseGoalProps = PropsWithChildren<{ title: string }>; // 제네릭타입으로 title을 추가하여 사용할 수 있다.

export default function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
      </div>
      <p>{children}</p>
      <button>Delete</button>
    </article>
  );
}
