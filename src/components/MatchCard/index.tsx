import { useState } from 'react';
import {
  Container, Date, Icon, Length, Plataform, Title,
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

  function handleConfirm() {
    setConfirm(!confirm);
  }

  return (
    <Container isConfirmed={confirm}>
      <Title>
        {title}
      </Title>
      <Plataform>
        {plataform}
      </Plataform>
      <Date>
        {date}
      </Date>
      <Length>
        {length}
      </Length>
      <Icon />
    </Container>
  );
}
