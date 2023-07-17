import { EmptyHomeList, Header, MatchCard } from '@components';
import { FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  ConnectedPeople,
  Container,
  Content,
  PurpleCard,
  PurpleCardText,
  Title,
} from './styles';
import rooms from '../../../src/utils/rooms';

export default function Games() {
  const data = rooms;

  return (
    <Container>
      <Header />
      <Content>
        <PurpleCard>
          <LinearGradient
            colors={['#9B56ED', '#6800E4']}
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              borderRadius: 8,
              padding: 10,
            }}
          >
            <PurpleCardText>
              Vai lá, marca uma partida
              e chama a galera!
            </PurpleCardText>
            <ConnectedPeople />
          </LinearGradient>
        </PurpleCard>

        <Title>
          Próximas partidas
        </Title>

        <FlatList
          style={{ marginTop: 20, marginBottom: 20 }}
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MatchCard
              id={item.id}
              title={item.title}
              plataform={item.plataform}
              date={item.date}
              length={item.players}
              max_length={item.max_players}
            />
          )}
          ListEmptyComponent={() => (
            <EmptyHomeList
              section='games'
            />
          )}
        />
      </Content>
    </Container>
  );
}
