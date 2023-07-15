import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import theme from '@styles';
import { ActiveBar } from './styles';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: theme.colors.blue,
      tabBarInactiveTintColor: theme.colors.gray,
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 60,
      },
    }}
    >
      <Tabs.Screen
        name="games/index"
        options={{
          tabBarIcon: ({ color }) => (
            <>
              <Ionicons
                name="game-controller-outline"
                size={32}
                color={color}
              />
              <ActiveBar color={color} />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          tabBarIcon: ({ color }) => (
            <>
              <Ionicons
                name="home-outline"
                size={32}
                color={color}
              />
              <ActiveBar color={color} />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          tabBarIcon: ({ color }) => (
            <>
              <Ionicons
                name="person-circle-outline"
                size={32}
                color={color}
              />
              <ActiveBar color={color} />
            </>
          ),
        }}
      />
    </Tabs>
  );
}
