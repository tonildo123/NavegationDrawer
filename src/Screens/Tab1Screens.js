import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../theme/themeScreen'

import {View, Text} from 'react-native';




export const Tab1Screens = () => {

  
  return (
    <View style={{
        ...styles.styleGlobal,
         }}>
        <Text style={{color:'black'}}>Tab1Screens</Text>

        <Text style={{margin:20, }}>
          <Icon name="rocket" size={50} color="#900" />;
        </Text>
        <Text style={{margin:20, }}>
          <Icon name="camera-outline" size={50} color="#900" />;
        </Text>
        <Text style={{margin:20, }}>
          <Icon name="logo-javascript" size={50} color="#900" />;
        </Text>
        <Text style={{margin:20, }}>
          <Icon name="logo-linkedin" size={50} color="#900" />;
        </Text>
        <Text style={{margin:20, }}>
          <Icon name="logo-whatsapp" size={50} color="#900" />;
        </Text>

    </View>
  );
};
