/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/**
 * Primero paras el drawer se instala los paquetes
 * 
 * npm install @react-navigation/drawer
 * npm install react-native-gesture-handler react-native-reanimated
 */
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView  } from '@react-navigation/drawer';
import { PersonaScreens } from '../Screens/PersonaScreens';
import { Windows2Screens } from '../Screens/Windows2Screens';
import { Windows3Screens } from '../Screens/Windows3Screens';
import { StackNavigation } from './StackNavigation';
import { Tabs } from './Tabs';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/themeScreen';

 const Drawer = createDrawerNavigator();
 
 export const MenuLateralBasico = () => {

  const { width } = useWindowDimensions();
   return (
     <Drawer.Navigator
      drawerType={width >= 768 ? 'permanent' : 'front'}
      drawerContent={ (props) => <MenuInterno { ...props } /> }

     >
       <Drawer.Screen name="StackNavigation"  component={StackNavigation} />
       <Drawer.Screen name="Windows2Screens"  component={Windows2Screens} />
       <Drawer.Screen name="Windows3Screens"  component={Windows3Screens} />
       <Drawer.Screen name="Tabs"  component={Tabs} />
       
       
       {/*<Drawer.Screen name="PersonaScreens" options={{title:'Personas'}} component={PersonaScreens} />*/}
       
     </Drawer.Navigator>
   );
 };

 const MenuInterno = ( { navigation }:  DrawerContentComponentProps<DrawerContentOptions> ) => {

  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
            source = {{
              uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif'}}
            style={styles.avatar}
        />
      </View>
      <View style={ styles.menuContainer }>

          <TouchableOpacity 
            style={ styles.menuBoton }
            onPress={ () => navigation.navigate('StackNavigation') }
          >
            <Text style={ styles.menuTexto }>Navegacion</Text>
          </TouchableOpacity>


          <TouchableOpacity 
            style={ styles.menuBoton }
            onPress={ () => navigation.navigate('Tabs') }
          >
            <Text style={ styles.menuTexto }>Tabs</Text>
          </TouchableOpacity>


          <TouchableOpacity 
            style={ styles.menuBoton }
            onPress={ () => navigation.navigate('Windows2Screens') }
          >
            <Text style={ styles.menuTexto }>
            
            <Icon name="settings-outline" size={30} color="#900" />
              </Text>
          </TouchableOpacity>

      </View>

    </DrawerContentScrollView>
  );
      
 }