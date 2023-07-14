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

export const Hello = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.black};

  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.black};
`;
