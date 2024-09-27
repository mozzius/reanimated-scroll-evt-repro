import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
      <Tabs>
        <Tabs.Screen name="index" options={{title: "No offset"}} />
        <Tabs.Screen name="buggy" options={{title: "With contentOffset"}} />
        <Tabs.Screen name="not-reanimated" options={{title: "Without Reanimated"}} />
      </Tabs>
  );
}
