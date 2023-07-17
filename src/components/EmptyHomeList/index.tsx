import React from 'react';
import { Anchor, BackImageGames, BackImageHome, Container, Message } from './styles';

interface EmptyHomeListProps {
  section: string;
}

export default function EmptyHomeList({ section }: EmptyHomeListProps) {
  return (
    <Container>
      {section === 'game' ? (
        <>
          <Message>
            Nenhuma partida foi marcada para a próxima semana 😕
          </Message>
          <BackImageGames />
        </>
      ) : (
        <>
          <Message>
            Você ainda não tem nada marcado 😕
            Procure novas partidas{' '}
            <Anchor href='/games'>aqui</Anchor>
          </Message>
          <BackImageHome />
        </>
      )}
    </Container>
  );
}
