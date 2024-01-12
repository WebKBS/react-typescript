interface CourseGoalProps {
  title: string;
  children: React.ReactNode;
}

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
