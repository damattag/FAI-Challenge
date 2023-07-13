import styled from 'styled-components/native';
import theme from '@styles';

interface MatchCardStyleProps {
  isConfirmed: boolean;
}

export const Container = styled.View`
  width: 90%;
  height: 80px;

  background-color: ${({ isConfirmed }: MatchCardStyleProps) => (isConfirmed ? theme.colors.green_20 : theme.colors.purple_20)};

  border-radius: 4px;
  
  position: relative;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.medium};
  font-size: ${theme.fontSize.medium};
  color: ${theme.colors.dark_gray};
`;

export const Content = styled.Text`
  font-family: ${theme.fonts.light};
  font-size: ${theme.fontSize.medium};
  color: ${theme.colors.dark_gray};
`;

export const Icon = styled.Image``;

export const ConfirmButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 20px;
  height: 20px;

  background-color: ${({ isConfirmed }: MatchCardStyleProps) => (isConfirmed ? theme.colors.green : theme.colors.red)};

  border-radius: 10px;

  top: -10px;
  left: 90%;
`;
