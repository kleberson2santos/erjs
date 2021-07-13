// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PropsWithChildren, ReactNode } from 'react';

type CardProps = PropsWithChildren<{
  title: string;
}>;

// type CardProps = {
//   title: string;
//   children?: ReactNode;
// };

export default function Card(props: CardProps) {
  return (
    <div
      style={{
        background: 'rgba(0,0,0,.25)',
        borderRadius: 8,
        padding: 16,
      }}
    >
      <div>{props.title}</div>
      {props.children}
    </div>
  );
}
