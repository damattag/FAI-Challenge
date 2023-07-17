import {
  EmptyHomeList,
  Header, MatchCard,
} from '@components';
import { FlatList } from 'react-native';
import {
  Container,
  Hello,
  Title,
  Content,
} from './styles';
import { rooms } from '@utils'

interface HomeProps {
  username: string;
}

export default function Home({ username }: HomeProps) {
  const data = [];

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
          ListEmptyComponent={() => (
            <EmptyHomeList
              section='home'
            />
          )}
        />
      </Content>
    </Container>
  );
}
