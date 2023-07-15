import theme from '@styles';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 250px;
  height: 150px;

  align-self: center;
  justify-content: space-around;

  padding: 10px;

  background-color: ${theme.colors.white};
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.medium};
  font-size: ${theme.fontSize.medium};
  color: ${theme.colors.black};
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  height: auto;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

interface ModalButtonProps {
  color: 'confirm' | 'cancel';
}

export const Button = styled.TouchableOpacity<ModalButtonProps>`
  width: 100px;
  height: 40px;

  justify-content: center;
  align-items: center;

  border-radius: 5px;

  background-color: ${({ color }) => (color === 'confirm' ? theme.colors.green : theme.colors.gray)};
`;

export const ButtonText = styled.Text`
  font-family: ${theme.fonts.medium};
  font-size: ${theme.fontSize.medium};
  color: ${theme.colors.black};
`;
