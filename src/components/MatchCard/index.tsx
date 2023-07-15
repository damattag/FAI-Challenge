import { useState } from 'react';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
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
import PopUp from '../PopUp';

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
  const [showPopUp, setShowPopUp] = useState(false);

  const router = useRouter();

  function deleteMatch() {
    setConfirm(false);
    setShowPopUp(false);
  }

  return (
    <Container isConfirmed={confirm} activeOpacity={0.7} onPress={() => router.push('/details')}>
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
        <ConfirmButton
          isConfirmed={confirm}
          onPress={() => (confirm ? setShowPopUp(true) : setConfirm(true))}
        >
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
      <PopUp
        isVisible={showPopUp}
        handleCancel={() => setShowPopUp(false)}
        handleConfirm={() => deleteMatch()}
      />
    </Container>
  );
}
