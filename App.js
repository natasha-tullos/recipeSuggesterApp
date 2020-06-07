import React, { useContext, useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/client/components/Login';
import Main from './src/client/components/Main';
import Recipes from './src/client/components/Recipes';
import Recipe from './src/client/components/Recipe';
import { ScreenStackHeaderRightView } from 'react-native-screens';

const Stack = createStackNavigator();

const App = () => {
  const [isAuthenticated, setAuth] = useState(false);
  const [user, setUser] = useState();

  return (
    <NavigationContainer>
      <Stack.Navigator
      >
        {
          !isAuthenticated ?
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: 'Macro Recipe Suggester' }}
              initialParams={{ isAuthenticated, setAuth, user, setUser }}
            />
          :
          <Stack.Screen
            name="Main"
            component={Main}
            initialParams={{ isAuthenticated, setAuth, user, setUser }}
          />
        }
        <Stack.Screen
          name="Recipes"
          component={Recipes}
          initialParams={{ isAuthenticated, setAuth, user, setUser }}
        />
        <Stack.Screen
          name="Recipe"
          component={Recipe}
          initialParams={{ isAuthenticated, setAuth }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
