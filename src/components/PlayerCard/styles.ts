import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 0;
`;

export const Username = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.black};
`;