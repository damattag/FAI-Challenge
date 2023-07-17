import { useEffect, useState } from 'react';
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
  CompletedText,
} from './styles';
import PopUp from '../PopUp';

interface MatchCardProps {
  id: string;
  title: string;
  plataform: string;
  date: string;
  length: number;
  max_length: number;
}

export default function MatchCard({
  id, title, plataform, date, length, max_length,
}: MatchCardProps) {
  const [confirm, setConfirm] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [maxPlayers, setMaxPlayers] = useState(false);

  const router = useRouter();

  function deleteMatch() {
    setConfirm(false);
    setShowPopUp(false);
  }

  useEffect(() => {
    if (length === max_length) {
      setMaxPlayers(true);
    }
  }, [length, max_length])

  return (
    <Container
      isConfirmed={confirm}
      isFull={maxPlayers}
      activeOpacity={0.7}
      onPress={() => router.push(`/details/${id}`)}
    >
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
          isFull={maxPlayers}
          disabled={maxPlayers}
          onPress={() => (confirm ? setShowPopUp(true) : setConfirm(true))}
        >
          {maxPlayers ? (
            <CompletedText>
              Cheia
            </CompletedText>
          ) : (
            confirm ? (
              <Feather name="x" size={18} color="black" />
            ) : (
              <Ionicons name="checkmark-sharp" size={18} color="black" />
            )
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
