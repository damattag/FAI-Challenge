import { useState } from 'react';
import { Ionicons, Feather } from '@expo/vector-icons';
import {
  Container,
  Icon,
  Date,
  Title,
  ConfirmButton,
  Plataform,
  Length,
  LeftContainer,
  RightContainer,
  PeopleContainer,
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
      <LeftContainer>
        <Title>
          {title}
        </Title>
        <Plataform>
          {plataform}
        </Plataform>
        <Date>
          {date}
        </Date>
      </LeftContainer>
      <RightContainer>
        <ConfirmButton isConfirmed={confirm} onPress={() => setConfirm(!confirm)}>
          {confirm ? (
            <Feather name="x" size={18} color="black" />
          ) : (
            <Ionicons name="checkmark-sharp" size={18} color="black" />
          )}
        </ConfirmButton>
        <PeopleContainer>
          <Length>
            {length}
          </Length>
          <Icon />
        </PeopleContainer>
      </RightContainer>
    </Container>
  );
}
