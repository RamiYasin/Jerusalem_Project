import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatScreen from './screens/chatScreen';
import ChatList from './screens/chatList';
import HomeScreen from './screens/HomeScreen'
import ShopScreen from './screens/ShopScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="ShopScreen" component={ShopScreen} />
      <Stack.Screen name="HomePage" component={HomeScreen} />
      <Stack.Screen name="Chatlist" component={ChatList} />
        <Stack.Screen
          name="chat_screen"
          component={ChatScreen}
          options={{title: 'Welcome'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
