import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: flex-start;

  gap: 10px;

  margin: 10px 0 5px 0;
  padding: 0;
`;

export const Username = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.dark_gray};
`;