export default function NewGoal() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // new FormData(event.currentTarget).forEach((value, name) => {
    //   console.log(name + ': ' + value);
    // });
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" name="goal" />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input type="text" id="summary" name="summary" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
