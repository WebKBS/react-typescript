import { ComponentPropsWithRef, forwardRef } from 'react';

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithRef<'input'>; // 내장된 input의 모든 속성을 상속받는다.

// 아래는 interface를 사용한 방법
// interface InputProps extends ComponentPropsWithRef<'input'> {
//   label: string;
//   id: string;
// }

export default forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, ...props },
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} ref={ref} />
    </p>
  );
});
