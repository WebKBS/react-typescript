import Input from './components/Input';

function App() {
  return (
    <main>
      <Input id="name" label="Your name" type="text" disabled />
      <Input id="age" label="Your age" type="number" />
    </main>
  );
}

export default App;
