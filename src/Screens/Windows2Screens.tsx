/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-trailing-spaces */
import { useNavigation } from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import { styles } from '../theme/themeScreen';

export const Windows2Screens = () => {

  const navigation = useNavigation(); // hooks para navegar entre pantallas

  return (
    <View style={styles.styleGlobal}>
        <Text style={styles.styleText} >Windows 2 Screens</Text>
        <Button title=" ir a pantalla 3" onPress={ ()=> navigation.navigate('Windows3Screens')}/>
        <Button title=" ir a pantalla 4" onPress={ ()=> navigation.navigate('Windows4Screens')}/>
    </View>

  );
};
