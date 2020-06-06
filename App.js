/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { NavContextProvider } from './src/client/contexts/NavigationContext';
import Login from './src/client/components/Login';
import Main from './src/client/components/Main';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <NavContextProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Macro Recipe Suggester' }}
          />
          <Stack.Screen
            name="Main"
            component={Main}
          />
        </Stack.Navigator>
      </NavContextProvider>
    </NavigationContainer>
  );
};

export default App;
