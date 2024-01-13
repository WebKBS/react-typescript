import { ComponentPropsWithRef } from 'react';

type ButtonProps = ComponentPropsWithRef<'button'> & {
  href?: never; // href 속성을 사용하지 못하게 한다.
};

type AnchorProps = ComponentPropsWithRef<'a'> & {
  href?: string; // href 속성을 필수로 사용하게 한다.
};

// 아래 함수는 "href"를 가지고 있는지 확인하고 있으면 AnchorProps로 타입을 지정한다.
function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  // is를 사용하는 이유는 props가 AnchorProps인지 확인하기 위해

  return 'href' in props;
}

export default function Button(props: ButtonProps | AnchorProps) {
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
