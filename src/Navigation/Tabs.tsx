/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-extra-semi */
/* eslint-disable eol-last */
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screens } from '../Screens/Tab1Screens';
import { Tab3Screen } from '../Screens/Tab3Screen';
import {Text, Platform} from 'react-native';
import { TopTabs } from './TopTabs';





export const Tabs = ()=>{


 return Platform.OS == 'ios'
  ? <TabsIOS/>
  : <TabsAndroid/>

}




////////////////////////////////////////////////////////////ANDROID



const TabAndroid = createMaterialBottomTabNavigator();

function TabsAndroid(){
  return (
    <TabAndroid.Navigator
      sceneAnimationEnable={true}
      barStyle={{
        backgroundColor:'blue',
      }}
      screenOptions={({route})=>({

        tabBarIcon: ({color, focused, size}) =>{

          let iconName: string = '';

          switch(route.name){

            case 'Tab1':
              iconName ='videocam-outline';
            break;
            case 'Tab2':
              iconName ='images-outline';
            break;
            case 'Tab3':
              iconName ='location-outline';
            break;

          }
          return  <Icon name={iconName} size={30} color="#900" />

        }

      })}
    >
      <TabAndroid.Screen name="Tab1" component={Tab1Screens} />
      <TabAndroid.Screen name="Tab2" component={TopTabs} />
      <TabAndroid.Screen name="Tab3" component={Tab3Screen} />
    </TabAndroid.Navigator>
  );
}

/////////////////////////////////////////////////////////////IOS

const TabIos = createBottomTabNavigator();

const TabsIOS = ()=> {
  return (
    <TabIos.Navigator
      tabBarOptions={{
        activeTintColor:'black',
        style:{
              borderTopColor:'black',
              borderTopWidth:100,
              color:'black',
        },
        labelstyle:{
          fontSize:20,
        },
      }}
      screenOptions={({route})=>({

        tabBarIcon: ({color, focused, size}) =>{

          let iconName: string = '';

          switch(route.name){

            case 'Tab1':
              iconName ='T1';
            break;
            case 'Tab2':
              iconName ='T2';
            break;
            case 'Tab3':
              iconName ='T3';
            break;

          }
          return <Text style={{
            color:'black',
          }}>{iconName}</Text>  

        }

      })}
      >
      <TabIos.Screen name="Tab1" component={Tab1Screens} />
      <TabIos.Screen name="Tab2" component={TopTabs} />
      <TabIos.Screen name="Tab3" component={Tab3Screen} />
    </TabIos.Navigator>
  );
};