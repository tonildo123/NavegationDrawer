/* eslint-disable eol-last */
/* eslint-disable jsx-quotes */
import React from 'react';
import {Text, View, Button,TouchableOpacity } from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import { styles } from '../theme/themeScreen';

//// en mi home llamo a las demas screens// primero creo una interface
interface Props extends StackScreenProps<any, any>{};


export const HomeScreens = ( {navigation} : Props ) => {
  return (
      <View style={styles.styleGlobal}>
        <Text>HomeScreens</Text>
        <Button title='ir a ventana 2' onPress={()=>navigation.navigate('Windows2Screens')}/>
        <Button title='ir a ventana 3' onPress={()=>navigation.navigate('Windows3Screens')}/>
        <Button title='ir a ventana 4' onPress={()=>navigation.navigate('Windows4Screens')}/>
        <Text style={styles.styleText}>Navegar a Persona</Text>

        <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.styleB1}
          onPress={ () => navigation.navigate('PersonaScreens', {
            id:1,
            nombre:'Pedro',
            edad:30,
          })  }

        >
            <Text style={styles.styleTextButton}>Pedro</Text>

        </TouchableOpacity>

        <TouchableOpacity
        style={styles.styleB2}
          onPress={ () => navigation.navigate('PersonaScreens', {
            id:2,
            nombre:'Pablo',
            edad:24,
          })  }

        >
            <Text style={styles.styleTextButton}>Pablo</Text>

        </TouchableOpacity>
        </View>

      </View>
  );
};