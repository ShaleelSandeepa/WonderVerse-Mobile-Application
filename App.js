import React from 'react';
import colors from './Colors';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import GenerateScreen from './screens/GenerateScreen';
import StoryScreen from './screens/StoryScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          statusBarHidden: false,
          headerShadowVisible: false,
          statusBarColor: colors.statusBar,
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.header,
          }
        }}>
        <Stack.Group>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Welcome to',
              headerShown: true,           
            }}
          />
          <Stack.Screen
            name="Generate"
            component={GenerateScreen}
            options={{
              title: 'Generate Story',
              headerShown: true,           
            }}
          />
          <Stack.Screen
            name="Story"
            component={StoryScreen}
            options={{
              title: 'Story',
              headerShown: true,           
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
