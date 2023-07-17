import { OnlineGame, RobotGames } from '@icons';
import { Link } from 'expo-router';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  gap: 48px;

  padding: 48px 24px;
`;

export const Message = styled.Text`
  width: 275px;
  height: auto;

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.dark_gray};
  text-align: center;

  Text {
    color: ${({ theme }) => theme.colors.purple};
  }
`;

export const BackImageHome = styled(OnlineGame)`
`;

export const BackImageGames = styled(RobotGames)`
`;

export const Anchor = styled(Link)`
  color: ${({ theme }) => theme.colors.purple};
`;