import { Container, Hello, Title } from './styles';

interface HomeProps {
  username: string;
}

export default function Home({ username }: HomeProps) {
  return (
    <Container>
      <Hello>{username}</Hello>
      <Title>Suas próximas partidas</Title>
    </Container>
  );
}
