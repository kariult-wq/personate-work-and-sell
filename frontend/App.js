/**
 * PERSONATE - WORK AND SELL
 * Main App Component
 */

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Placeholder screens
const PlaceholderScreen = ({ name }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{name} Screen</Text>
    <Text style={{ color: '#999', marginTop: 10 }}>Coming soon...</Text>
  </View>
);

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#007AFF',
      }}
    >
      <Tab.Screen
        name="Jobs"
        component={() => <PlaceholderScreen name="Jobs" />}
        options={{ tabBarLabel: 'Jobs', headerTitle: 'Jobs' }}
      />
      <Tab.Screen
        name="Products"
        component={() => <PlaceholderScreen name="Products" />}
        options={{ tabBarLabel: 'Products', headerTitle: 'Products' }}
      />
      <Tab.Screen
        name="Food"
        component={() => <PlaceholderScreen name="Food" />}
        options={{ tabBarLabel: 'Food', headerTitle: 'Food' }}
      />
      <Tab.Screen
        name="Skills"
        component={() => <PlaceholderScreen name="Skills" />}
        options={{ tabBarLabel: 'Learn', headerTitle: 'Skills' }}
      />
      <Tab.Screen
        name="Profile"
        component={() => <PlaceholderScreen name="Profile" />}
        options={{ tabBarLabel: 'Profile', headerTitle: 'Profile' }}
      />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Screen name="MainApp" component={MainTabNavigator} />
      ) : (
        <Stack.Group>
          <Stack.Screen
            name="Login"
            component={() => <PlaceholderScreen name="Login" />}
          />
          <Stack.Screen
            name="Signup"
            component={() => <PlaceholderScreen name="Signup" />}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
