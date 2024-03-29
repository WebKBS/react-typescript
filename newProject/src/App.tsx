import { useRef } from 'react';
import Button from './components/Button';
import Form, { FormHandle } from './components/Form';
import Input from './components/Input';

function App() {
  // const input = useRef<HTMLInputElement>(null);
  const customRef = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: number }; // 타입 단언
    console.log(extractedData);
    customRef.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customRef}>
        <Input id="name" label="Name" type="text" />
        <Input id="age" label="Age" type="number" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>

      {/* <Input id="test" label="test" type="text" ref={input} />
      <Container as={Button}>Click Me</Container>
      <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href="https://google.com">A Link</Button>
      </p>
      <Input id="name" label="Your name" type="text" disabled />
      <Input id="age" label="Your age" type="number" /> */}
    </main>
  );
}

export default App;
