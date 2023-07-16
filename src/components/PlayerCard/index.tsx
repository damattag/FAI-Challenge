import { Ionicons } from "@expo/vector-icons";
import { Container, Username } from "./styles";
import theme from "@styles";

interface PlayerCardProps {
  username: string;
}

export default function PlayerCard({ username }: PlayerCardProps) {
  return (
    <Container>
      <Ionicons name="person-circle-outline" size={24} color={theme.colors.blue_20} />
      <Username>
        {username}
      </Username>
    </Container>
  );
}