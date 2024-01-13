import {
  ComponentPropsWithoutRef,
  FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';

export type FormHandle = {
  clear: () => void;
};

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void; // value는 어떠한 타입이든 될수 있다.
};

const Form = forwardRef<FormHandle, FormProps>(function Form(
  { children, onSave, ...otherProps },
  ref
) {
  const form = useRef<HTMLFormElement>(null);

  // useImperativeHandle은 부모 컴포넌트에서 ref를 사용할때 사용한다.
  // https://react.dev/reference/react/useImperativeHandle
  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log('clear');
        form.current?.reset();
      },
    };
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    console.log(data);

    onSave(data); // onSave는 App.tsx에서 정의되어있다.
  }

  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={form}>
      {children}
    </form>
  );
});

export default Form;
