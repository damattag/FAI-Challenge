import styled from 'styled-components/native';
import theme from '@styles';
import { PeopleIcon } from '@icons';

interface MatchCardStyleProps {
  isConfirmed: boolean;
}

export const Container = styled.View`
  width: 88%;
  height: 80px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  align-self: auto;

  padding: 8px 16px;

  background-color: ${({ isConfirmed }: MatchCardStyleProps) => (isConfirmed ? theme.colors.green_20 : theme.colors.purple_20)};

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
  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ isConfirmed }: MatchCardStyleProps) => (!isConfirmed ? theme.colors.green : theme.colors.red)};

  border-radius: 12px;
`;
