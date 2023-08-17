import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function LoginFlow() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Signup' component={SignupScreen} />
      <Stack.Screen name='Signin' component={SigninScreen} />
    </Stack.Navigator>
  );
}

function TrackListFlow() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='TrackList' component={TrackListScreen} />
      <Stack.Screen name='TrackDetail' component={TrackDetailScreen} />
    </Stack.Navigator>
  );
}

function MainFlow() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='TrackList' component={TrackListFlow} />
      <Tab.Screen name='TrackCreate' component={TrackCreateScreen} />
      <Tab.Screen name='Account' component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='loginFlow' component={LoginFlow} />
        <Stack.Screen name='mainFlow' component={MainFlow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
