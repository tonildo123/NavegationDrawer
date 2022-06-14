
/**
 * Vamos a usar stack navigation
 * drawer navigation
 * seguir los pasos de este link https://reactnavigation.org/docs/stack-navigator
 * ---------------> npm install @react-navigation/native <---------------------------------------------------
 * ---------------> npm install react-native-screens react-native-safe-area-context <------------------------
 * ---------------> npm install @react-navigation/stack <----------------------------------------------------

la version que funciona es npm install <<<<< react-native-reanimated@~2.2.0 >>>>

*/
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { StackNavigation } from './src/Navigation/StackNavigation';
import { MenuLateralBasico } from './src/Navigation/MenuLateralBasico';
//import { Tabs } from './src/Navigation/Tabs';

const App = () => {

  return (
   <NavigationContainer>
    {/*<StackNavigation />*/}
      <MenuLateralBasico />
      {/*<Tabs />*/}
   </NavigationContainer>
    );
  };
export default App;
