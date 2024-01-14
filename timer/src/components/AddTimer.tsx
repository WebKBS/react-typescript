import { useRef } from 'react';

import Button from './Ui/Button.tsx';
import Form, { FormHandle } from './Ui/Form.tsx';
import Input from './Ui/Input.tsx';
import { useTimersContext } from './store/timers-context.tsx';

export default function AddTimer() {
  const form = useRef<FormHandle>(null);
  const { addTimer } = useTimersContext();

  function handleSaveTimer(data: unknown) {
    const extractedData = data as { name: string; duration: string };
    if (!extractedData.name || !extractedData.duration) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    addTimer({ name: extractedData.name, duration: +extractedData.duration });
    form.current?.clear();
  }

  return (
    <Form ref={form} onSave={handleSaveTimer} id="add-timer">
      <Input type="text" label="Name" id="name" />
      <Input type="number" label="Duration" id="duration" />
      <p>
        <Button>Add Timer</Button>
      </p>
    </Form>
  );
}
