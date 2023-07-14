import { OnlineGame } from '@icons';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 24px;
`;

export const Message = styled.Text`
  width: 250px;
  height: auto;

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.dark_gray};
  text-align: center;

  Text {
    color: ${({ theme }) => theme.colors.purple};
  }
`;

export const BackImage = styled(OnlineGame)`
`;
