import styled from 'styled-components/native';
import theme from '@styles';
import { PeopleIcon } from '@icons';

interface MatchCardStyleProps {
  isConfirmed: boolean;
  isFull: boolean;
}

export const Container = styled.TouchableOpacity<MatchCardStyleProps>`
  width: 88.5%;
  height: 80px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  align-self: auto;

  margin-bottom: 10px;
  padding: 8px 16px;

  background-color: ${({ isFull, isConfirmed }: MatchCardStyleProps) => ( isFull ? theme.colors.blue_20 : isConfirmed ? theme.colors.green_20 : theme.colors.purple_20)};

  border-radius: 4px;
`;

export const LeftContainer = styled.View`
  width: auto;
  height: 100%;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.medium};
  font-size: ${theme.fontSize.medium};
  color: ${theme.colors.dark_gray};
`;

export const Plataform = styled.Text`
  font-family: ${theme.fonts.light};
  font-size: ${theme.fontSize.medium};
  color: ${theme.colors.dark_gray};
`;

export const Date = styled.Text`
  font-family: ${theme.fonts.light};
  font-size: ${theme.fontSize.medium};
  color: ${theme.colors.dark_gray};
`;

export const RightContainer = styled.View`
  width: 20%;
  height: 100%;

  align-items: flex-end;
  justify-content: space-between;
`;

export const PeopleContainer = styled.View`
  width: auto;
  height: 50%;

  flex-direction: row;
  align-items: center;
  gap: 5px
`;

export const Length = styled.Text`
  font-family: ${theme.fonts.light};
  font-size: ${theme.fontSize.medium};
  color: ${theme.colors.dark_gray};
`;

export const Icon = styled(PeopleIcon)`
`;

export const ConfirmButton = styled.TouchableOpacity`
  width: ${({isFull}) => isFull ? '100%' : '24px'};
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ isFull, isConfirmed }: MatchCardStyleProps) => (isFull ? theme.colors.gray : !isConfirmed ? theme.colors.green : theme.colors.red)};

  border-radius: 12px;
`;

export const CompletedText = styled.Text`
  font-family: ${theme.fonts.semiBold};
  font-size: ${theme.fontSize.small};
  color: ${theme.colors.dark_gray};
`;