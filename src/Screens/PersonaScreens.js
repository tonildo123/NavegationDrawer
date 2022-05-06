import { useRoute } from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import { styles } from '../theme/themeScreen';

export const PersonaScreens = (props : any) => {


  const propiedades = useRoute();
  console.log('usando hookroute : ' + JSON.stringify(propiedades, null, 3));
  console.log(props);
  // para ver lo que viene en los props
  console.log('recibo de home : ' + JSON.stringify(props, null, 3));

  const id = props.route.params.id;
  const name = propiedades.params.nombre;
  const age = props.route.params.edad;

  return (
    <View style={styles.styleGlobal}>
        <Text style={styles.styleText}>id {id}</Text>
        <Text style={styles.styleText}>Nombre : {name}</Text>
        <Text style={styles.styleText}>edad {age}</Text>
    </View>
  );
};
