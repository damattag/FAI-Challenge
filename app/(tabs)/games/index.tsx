import { Header, MatchCard } from '@components';
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

export default function Games() {
  const data = [
    {
      id: '1',
      title: 'Title',
      plataform: 'Discord',
      date: 'Amanhã às 20:00',
      length: 0,
    },
    {
      id: '2',
      title: 'ai',
      plataform: 'Discord',
      date: 'Amanhã às 20:00',
      length: 0,
    },
    {
      id: '3',
      title: 'Title',
      plataform: 'Discord',
      date: 'Amanhã às 20:00',
      length: 0,
    },
    {
      id: '4',
      title: 'Title',
      plataform: 'Discord',
      date: 'Amanhã às 20:00',
      length: 0,
    },
    {
      id: '5',
      title: 'Title',
      plataform: 'Discord',
      date: 'Amanhã às 20:00',
      length: 0,
    },
    {
      id: '6',
      title: 'Title',
      plataform: 'Discord',
      date: 'Amanhã às 20:00',
      length: 0,
    },
    {
      id: '7',
      title: 'Title',
      plataform: 'Discord',
      date: 'Amanhã às 20:00',
      length: 0,
    },
  ];

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
              title={item.title}
              plataform={item.plataform}
              date={item.date}
              length={item.length}
            />
          )}
        />
      </Content>
    </Container>
  );
}
