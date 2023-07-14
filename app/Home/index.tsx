import {
  EmptyHomeList, Header, MatchCard, Navbar,
} from '@components';
import { FlatList } from 'react-native';
import {
  Container, Hello, Title, Content,
} from './styles';

interface HomeProps {
  username: string;
}

export default function Home({ username }: HomeProps) {
  const data = [
    {
      id: '1',
      title: 'Title',
      plataform: 'Discord',
      date: 'Amanhã às 20:00',
      length: 0,
    },
    {
      id: '2',
      title: 'ai',
      plataform: 'Discord',
      date: 'Amanhã às 20:00',
      length: 0,
    },
    {
      id: '3',
      title: 'Title',
      plataform: 'Discord',
      date: 'Amanhã às 20:00',
      length: 0,
    },
    {
      id: '4',
      title: 'Title',
      plataform: 'Discord',
      date: 'Amanhã às 20:00',
      length: 0,
    },
    {
      id: '5',
      title: 'Title',
      plataform: 'Discord',
      date: 'Amanhã às 20:00',
      length: 0,
    },
    {
      id: '6',
      title: 'Title',
      plataform: 'Discord',
      date: 'Amanhã às 20:00',
      length: 0,
    },
    {
      id: '7',
      title: 'Title',
      plataform: 'Discord',
      date: 'Amanhã às 20:00',
      length: 0,
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
              title={item.title}
              plataform={item.plataform}
              date={item.date}
              length={item.length}
            />
          )}
        />
      </Content>
      <Navbar page="home" />
    </Container>
  );
}
