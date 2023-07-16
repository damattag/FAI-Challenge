import { Ionicons } from '@expo/vector-icons';
import { Container, Logo } from './styles';
import { useRouter } from 'expo-router';

interface HeaderProps {
  goBack?: boolean;
}

export default function Header({ goBack }: HeaderProps) {
  const router = useRouter();

  function handleGoBack() {
    router.back();
  }

  return (
    <Container>
      {goBack && (
        <Ionicons
          name="chevron-back"
          size={24}
          color="black"
          style={{ position: 'absolute', left: 20 }}
          onPress={handleGoBack}
        />
      )}
      <Logo />
    </Container>
  );
}
