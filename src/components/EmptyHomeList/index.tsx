import { Text } from 'react-native';
import { BackImage, Container, Message } from './styles';

export default function EmptyHomeList() {
  return (
    <Container>
      <Message>
        Você ainda não tem nada marcado 😕
        Procure novas partidas
        {' '}
        <Text>aqui</Text>
      </Message>
      <BackImage />
    </Container>
  );
}
