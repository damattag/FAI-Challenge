import { Container } from '../style';
import { Header } from '@components';
import { Card, ConfirmButton, Content, ContentText, Description, Participants, ParticipantsContainer, ParticipantsHeader, Title } from './styles';
import { Feather, Ionicons } from '@expo/vector-icons';
import theme from '@styles';
import { useState } from 'react';
import PopUp from '../../src/components/PopUp';
import { FlatList } from 'react-native-gesture-handler';
import PlayerCard from '../../src/components/PlayerCard';

export default function Details() {
  const data = {
    id: 1,
    Title: 'Minecraft',
    Plataform: 'Discord',
    Date: '06/07/2023   |   19h',
    Description: 'Lorem ipsum dolor sit amet.',
    Length: 2,
    Link: 'https://www.youtube.com/watch?v=5qap5aO4i9A',
    Participants: [
      {
        id: 1,
        username: 'User1',
      },
      {
        id: 2,
        username: 'User2',
      },
    ],
  };



  const [confirm, setConfirm] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  function deleteMatch() {
    setConfirm(false);
    setShowPopUp(false);
  }

  return (
    <Container>
      <Header goBack />
      <Content>
        <Card isConfirmed={confirm}>
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
          <Title>
            {data.Title}
          </Title>
          <ContentText>
            {data.Date}
          </ContentText>
          <ContentText>
            {data.Plataform}
          </ContentText>
          <ContentText bold>
            Descrição:
          </ContentText>
          <Description>
            {data.Description}
          </Description>
          <ContentText bold>
            Link:
          </ContentText>
          <Description isLink>
            {data.Link.substring(0, 25).concat('...')}
            <Ionicons
              name="copy-outline"
              size={20}
              color={theme.colors.dark_gray}
            />
          </Description>
        </Card>
        <ParticipantsContainer>
          <ParticipantsHeader>
            <ContentText bold>
              Participantes
            </ContentText>
            <Participants>
              <ContentText>
                {data.Length} / 10
              </ContentText>
              <Ionicons name="people" size={20} color={theme.colors.dark_gray} />
            </Participants>
          </ParticipantsHeader>
          <FlatList
            data={data.Participants}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <PlayerCard username={item.username} />
            )}
          />
        </ParticipantsContainer>
      </Content>
      <PopUp
        isVisible={showPopUp}
        handleCancel={() => setShowPopUp(false)}
        handleConfirm={() => deleteMatch()}
      />
    </Container>
  );
}
