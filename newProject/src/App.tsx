import Button from './components/Button';
import Input from './components/Input';

function App() {
  return (
    <main>
      <p>
        <Button element="button">A Button</Button>
      </p>
      <p>
        <Button element="anchor" href="https://google.com">
          A Link
        </Button>
      </p>
      <Input id="name" label="Your name" type="text" disabled />
      <Input id="age" label="Your age" type="number" />
    </main>
  );
}

export default App;
