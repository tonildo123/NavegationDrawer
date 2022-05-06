import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {Text, View, Button} from 'react-native';
import { styles } from '../theme/themeScreen';

export const Windows4Screens = (props) => {

  

  const navigation = useNavigation();
  return (
      <View>
          <Text style={styles.styleText} >Windows 4 Screens</Text>
          <Button title=" ir a pantalla 2" onPress={()=> navigation.navigate('Windows2Screens')}/>
      </View>

  );
};
