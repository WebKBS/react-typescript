import Button from './components/Button';
import Container from './components/Container';
import Input from './components/Input';

function App() {
  return (
    <main>
      <Container as={Button} />

      <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href="https://google.com">A Link</Button>
      </p>
      <Input id="name" label="Your name" type="text" disabled />
      <Input id="age" label="Your age" type="number" />
    </main>
  );
}

export default App;
