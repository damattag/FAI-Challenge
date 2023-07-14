import styled from 'styled-components/native';
import theme from '@styles';
import {
  ActiveGameIcon, ActiveHomeIcon, ActiveProfileIcon, GameIcon, HomeIcon, ProfileIcon,
} from '@icons';

export const Container = styled.View.attrs({
  elevation: 1,
})`
  width: 100%;
  height: 60px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;

  border-radius: 4px;

  background-color: ${theme.colors.white};
`;

export const Menu = styled.View`
  width: 80%;
  height: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MenuItems = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})`
  align-items: center;
  justify-content: flex-start;
`;

export const HomeButton = styled(HomeIcon)`
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const ActiveHomeButton = styled(ActiveHomeIcon)`
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const GameButton = styled(GameIcon)`
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const ActiveGameButton = styled(ActiveGameIcon)`
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const ProfileButton = styled(ProfileIcon)`
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const ActiveProfileButton = styled(ActiveProfileIcon)`
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const ActiveBar = styled.View`
  width: 15px;
  height: 3px;

  background-color: ${theme.colors.blue};

  border-radius: 4px;
`;
