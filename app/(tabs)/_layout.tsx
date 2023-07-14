import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
    }}
    >
      <Tabs.Screen name="games/index" />
      <Tabs.Screen name="home/index" />
      <Tabs.Screen name="profile/index" />
    </Tabs>
  );
}
