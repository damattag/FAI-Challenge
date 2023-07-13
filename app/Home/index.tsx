import { Header, MatchCard } from '@components';
import { FlatList } from 'react-native';
import { Container, Hello, Title } from './styles';

interface HomeProps {
  username: string;
}

export default function Home({ username }: HomeProps) {
  return (
    <Container>
      <Header />
      <Hello>
        Olá,
        {' '}
        {username}
        !
      </Hello>
      <Title>Suas próximas partidas</Title>

      <FlatList
        style={{ paddingTop: 20 }}
        data={[{ id: '1' }]}
        keyExtractor={(item) => item.id}
        renderItem={() => (
          <MatchCard
            title="Title"
            plataform="Discord"
            date="Amanhã às 20:00"
            length={0}
          />
        )}
      />
    </Container>
  );
}
