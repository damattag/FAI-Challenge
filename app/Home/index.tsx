import { Header } from '@components';
import { Container, Hello, Title } from './styles';

interface HomeProps {
  username: string;
}

export default function Home({ username }: HomeProps) {
  return (
    <Container>
      <Header />
      <Hello>
        Olá
        {' '}
        {username}
      </Hello>
      <Title>Suas próximas partidas</Title>
    </Container>
  );
}
