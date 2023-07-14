import { useRouter } from 'expo-router';
import {
  ActiveBar,
  ActiveGameButton,
  ActiveHomeButton,
  ActiveProfileButton,
  Container, GameButton, HomeButton, Menu, MenuItems, ProfileButton,
} from './styles';

interface NavbarProps {
  page: string;
}

export default function Navbar({ page }: NavbarProps) {
  const router = useRouter();

  function handleNavigate() {
    router.push(`/${page}`);
  }

  return (
    <Container style={{
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 5,
    }}
    >
      <Menu>
        <MenuItems onPress={() => handleNavigate()}>
          {page === 'game' ? (
            <>
              <ActiveGameButton />
              <ActiveBar />
            </>
          ) : (
            <GameButton />
          )}
        </MenuItems>
        <MenuItems onPress={() => handleNavigate()}>
          {page === 'home' ? (
            <>
              <ActiveHomeButton />
              <ActiveBar />
            </>
          ) : (
            <HomeButton />
          )}
        </MenuItems>
        <MenuItems onPress={() => handleNavigate()}>
          {page === 'profile' ? (
            <>
              <ActiveProfileButton />
              <ActiveBar />
            </>
          ) : (
            <ProfileButton />
          )}
        </MenuItems>
      </Menu>
    </Container>
  );
}
