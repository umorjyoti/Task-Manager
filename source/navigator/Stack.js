import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

const StackNav = createNativeStackNavigator();

const Stack = () => {
  return (
    <NavigationContainer>
      <StackNav.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <StackNav.Screen name="Home" component={HomeScreen} />
      </StackNav.Navigator>
    </NavigationContainer>
  );
};

export default Stack;
