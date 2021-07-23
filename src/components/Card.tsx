// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PropsWithChildren, ReactNode } from 'react';
import * as C from './Card.styles';
import Button from './Button';

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
    <C.Wrapper align={props.align || 'left'}>
      <C.Title>{props.title}</C.Title>
      {props.children}
      <div>
        <Button onClick={() => console.log('Uiiu')}>Ver mais</Button>
      </div>
    </C.Wrapper>
  );
}
