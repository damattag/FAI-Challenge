import { theme } from '@storybook/react-native/dist/preview/components/Shared/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 0;

  background-color: ${({ theme }) => theme.colors.light_background};

  position: relative;
`;

export const Content = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 0 20px;
`;

interface CardProps {
  isConfirmed: boolean;
}

export const Card = styled.View<CardProps>`
  width: 300px;
  height: auto;

  align-items: flex-start;
  justify-content: flex-start;
  gap: 7px;

  margin-top: 10px;
  padding: 20px;

  background-color: ${({ isConfirmed, theme }) => isConfirmed ? theme.colors.green_20 : theme.colors.purple_20};

  border-radius: 10px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.black};
`;

interface ContentTextProps {
  bold?: boolean;
}

export const ContentText = styled.Text<ContentTextProps>`
  font-family: ${({ bold, theme }) => bold ? theme.fonts.medium : theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ bold, theme }) => bold ? theme.colors.black : theme.colors.dark_gray};
`;

interface DescriptionProps {
  isLink?: boolean;
}

export const Description = styled.Text<DescriptionProps>`
  width: 100%;
  min-height: ${({ isLink }) => isLink ? "auto" : '100px'};
  height: auto;

  align-items: space-between;

  padding: 10px;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.white_50};

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.dark_gray};
`;

interface ConfirmButtonProps {
  isConfirmed: boolean;
}

export const ConfirmButton = styled.TouchableOpacity<ConfirmButtonProps>`
  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ isConfirmed }: ConfirmButtonProps) => (!isConfirmed ? '#51E678' : '#EA394A')};

  border-radius: 12px;

  position: absolute;
  top: -12px;
  right: 10px;
`;

export const ParticipantsContainer = styled.View`
  width: 100%;
  height: auto;

  margin-top: 10px;
`; 

export const ParticipantsHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  gap: 125px;
`;

export const Participants = styled.View`
  flex-direction: row;

  gap: 10px;
`;