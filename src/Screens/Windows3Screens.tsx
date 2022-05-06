import React from 'react';
import {Text, View, Button} from 'react-native';
import { styles } from '../theme/themeScreen';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{}; // aqui vamos a usar interface

export const Windows3Screens = ({navigation} : Props) => { // desestructuro navigation de props


  
  return (
      <View>
            <Text style={styles.styleText} >Windows 3 Screens</Text>
            <Button title=" ir a pantalla 4" onPress={ ()=> navigation.navigate('Windows4Screens')}/>
            <Button title=" ir a pantalla Home" onPress={ ()=> navigation.popToTop()}/>
            <Button title=" ir a pantalla 2" onPress={ ()=> navigation.pop()}/>
      </View>

  );
};
