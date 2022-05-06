/* eslint-disable quotes */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreens } from '../Screens/HomeScreens';
import { Windows2Screens } from '../Screens/Windows2Screens';
import { Windows3Screens } from '../Screens/Windows3Screens';
import { Windows4Screens } from '../Screens/Windows4Screens';
import { PersonaScreens } from '../Screens/PersonaScreens';


const Stack = createStackNavigator();

export function StackNavigation() {


  return (
    <Stack.Navigator
        screenOption={{
          headerStyle: { // este oculta o muestra el header del screen
              elevation:0,
              shadowColor:'transparent',
      },
    }}

    >
      <Stack.Screen name="HomeScreens"     options = {{title:"Home"}} component={HomeScreens} />
      <Stack.Screen name="Windows2Screens" options = {{title:"Setting"}} component={Windows2Screens} />
      <Stack.Screen name="Windows3Screens" options = {{title:"Contact"}} component={Windows3Screens} />
      <Stack.Screen name="Windows4Screens" options = {{title:"Result"}} component={Windows4Screens} />
      <Stack.Screen name="PersonaScreens" component={PersonaScreens} />
    </Stack.Navigator>
  );
};

