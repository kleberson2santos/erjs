// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PropsWithChildren, ReactNode } from 'react';
import './Card.css';

type CardProps = PropsWithChildren<{
  title: string;
  align?: 'center' | 'left' | 'right';
}>;

// type CardProps = {
//   title: string;
//   children?: ReactNode;
// };

export default function Card(props: CardProps) {
  return (
    <div className={`Card ${props.align || 'center'}`}>
      <div>{props.title}</div>
      {props.children}
    </div>
  );
}
