export default function CourseGoal({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
      <button>Delete</button>
    </article>
  );
}
