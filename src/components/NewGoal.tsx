import { useRef } from 'react';

export default function NewGoal() {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // new FormData(event.currentTarget).forEach((value, name) => {
    //   console.log(name + ': ' + value);
    // });

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
    console.log(enteredGoal);
    console.log(enteredSummary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input type="text" id="summary" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
