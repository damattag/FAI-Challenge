import React, { useState } from 'react';
import {
  Container, Icon, Content, Title, ConfirmButton,
} from './styles';

interface MatchCardProps {
  title: string;
  plataform: string;
  date: string;
  length: number;
}

export default function MatchCard({
  title, plataform, date, length,
}: MatchCardProps) {
  const [confirm, setConfirm] = useState(false);

  return (
    <Container isConfirmed={confirm}>
      <ConfirmButton isConfirmed={confirm} onPress={() => setConfirm(!confirm)} />
      <Title>
        {title}
      </Title>
      <Content>
        {plataform}
      </Content>
      <Content>
        {date}
      </Content>
      <Content>
        {length}
      </Content>
      <Icon />
    </Container>
  );
}
