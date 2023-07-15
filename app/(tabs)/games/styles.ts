import { InterconnectedPeople } from '@icons';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: flex-start;

  padding: 0;

  background-color: ${({ theme }) => theme.colors.light_background};
`;

export const Content = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 0 20px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.black};
`;

export const PurpleCard = styled.View`
  width: 100%;
  height: 80px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 20px 0;
`;

export const ConnectedPeople = styled(InterconnectedPeople)`
`;

export const PurpleCardText = styled.Text`
  width: 50%;

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.white};
`;
