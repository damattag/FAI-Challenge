import styled from 'styled-components/native';
import theme from '@styles';

interface ContainerProps {
  isConfirmed: boolean;
}

export const Container = styled.View`
  width: 90%;
  height: 80px;

  background-color: ${({ isConfirmed }: ContainerProps) => (isConfirmed ? theme.colors.green_20 : theme.colors.purple_20)};

  border-radius: 4px;
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

export const Date = styled.View`
  font-family: ${theme.fonts.light};
  font-size: ${theme.fontSize.medium};
  color: ${theme.colors.dark_gray};
`;

export const Length = styled.Text`
  font-family: ${theme.fonts.light};
  font-size: ${theme.fontSize.medium};
  color: ${theme.colors.dark_gray};
`;

export const Icon = styled.Image``;

export const ConfirmButton = styled.TouchableOpacity``;
