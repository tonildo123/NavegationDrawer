
/**
 * Vamos a usar stack navigation
 * drawer navigation
 * seguir los pasos de este link https://reactnavigation.org/docs/stack-navigator
 * ---------------> npm install @react-navigation/native <---------------------------------------------------
 * ---------------> npm install react-native-screens react-native-safe-area-context <------------------------
 * ---------------> npm install @react-navigation/stack <----------------------------------------------------
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/Navigation/StackNavigation';
import 'react-native-gesture-handler';

const App = () => {

  return (
   <NavigationContainer>
    <StackNavigation />
   </NavigationContainer>
    );
  };
export default App;
