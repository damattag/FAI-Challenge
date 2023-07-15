import theme from "@styles";
import styled from "styled-components/native";

interface ActiveBarProps {
  color: string;
}

export const ActiveBar = styled.View<ActiveBarProps>`
  width: 15px;
  height: 2px;

  margin-top: 3px;

  background-color: ${({ color }) => color === theme.colors.blue ? theme.colors.blue : theme.colors.white};

  border-radius: 4px;
`;
