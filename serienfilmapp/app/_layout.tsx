import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="(tabs)" options={{}} />
    </Stack>
  );
}
