import { ComponentPropsWithoutRef, ElementType } from 'react';

type ContainerProps<T extends ElementType> = {
  //T는 어떠한 타입이든 될수 있다. 그러나 ElementType은 보장되지 않는다. 그래서 extends를 사용하여 ElementType을 상속받는다.

  as?: T;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || 'div';

  return <Component {...props}>{children}</Component>;
}
