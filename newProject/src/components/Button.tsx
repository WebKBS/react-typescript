import { ComponentPropsWithRef } from 'react';

type ButtonProps = {
  element: 'button';
} & ComponentPropsWithRef<'button'>;

type AnchorProps = {
  element: 'anchor';
  href: string;
} & ComponentPropsWithRef<'a'>;

export default function Button(props: ButtonProps | AnchorProps) {
  if (props.element === 'anchor') {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
