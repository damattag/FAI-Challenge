import {
  Header, MatchCard,
} from '@components';
import { FlatList } from 'react-native';
import {
  Container,
  Hello,
  Title,
  Content,
} from './styles';

interface HomeProps {
  username: string;
}

export default function Home({ username }: HomeProps) {
  const data = [
    {
      id: '1',
      title: 'Minecraft',
      plataform: 'Discord',
      date: '06/07/2023   |   19h',
      players: 6,
      max_players: 10,
    },
    {
      id: '2',
      title: 'Guitar Hero',
      plataform: 'Discord',
      date: '06/07/2023   |   19h',
      players: 7,
      max_players: 10,
    },
    {
      id: '3',
      title: 'Gartic Phone',
      plataform: 'Discord',
      date: '06/07/2023   |   19h',
      players: 10,
      max_players: 10,
    },
    {
      id: '4',
      title: 'Gartic',
      plataform: 'Discord',
      date: '06/07/2023   |   19h',
      players: 1,
      max_players: 10,
    },
    {
      id: '5',
      title: 'Stardew Valley',
      plataform: 'Discord',
      date: '06/07/2023   |   19h',
      players: 3,
      max_players: 10,
    },
    {
      id: '6',
      title: 'FIFA',
      plataform: 'Discord',
      date: '06/07/2023   |   19h',
      players: 2,
      max_players: 10,
    },
    {
      id: '7',
      title: 'Payday 2',
      plataform: 'Discord',
      date: '06/07/2023   |   19h',
      players: 3,
      max_players: 10,
    },
  ];

  return (
    <Container>
      <Header />
      <Content>
        <Hello>
          Olá,
          {' '}
          {username}
          !
        </Hello>
        <Title>Suas próximas partidas</Title>

        <FlatList
          style={{ marginTop: 20, marginBottom: 20 }}
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MatchCard
              id={item.id}
              title={item.title}
              plataform={item.plataform}
              date={item.date}
              length={item.players}
              max_length={item.max_players}
            />
          )}
        />
      </Content>
    </Container>
  );
}
