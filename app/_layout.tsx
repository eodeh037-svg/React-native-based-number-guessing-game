import '../global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Stack initialRouteName='welcomeScreen' screenOptions={{headerShown:false}}>
        <Stack.Screen name='welcomeScreen'/>
           <Stack.Screen name='index'/>
      </Stack>
    </SafeAreaProvider>
  );
}
