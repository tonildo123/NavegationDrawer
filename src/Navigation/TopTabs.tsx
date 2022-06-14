/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TopTab1Screen } from '../Screens/TopTab1Screen';
import { TopTab2Screen } from '../Screens/TopTab2Screen';
import { TopTab3Screen } from '../Screens/TopTab3Screen';
import {Text} from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor:'white',
        }}
        tabBarOptions={{
            pressColor:'blue',
            showIcon:true,
            indicatorStyle:{
                backgroundColor:'blue',
                
            }
        }}
        screenOptions={({route})=>({

            tabBarIcon: ({color, focused, }) =>{
    
              let iconName: string = '';
    
              switch(route.name){
    
                case 'Top1':
                  iconName ='podium-outline';
                break;
                case 'Top2':
                  iconName ='pizza-outline';
                break;
                case 'Top3':
                  iconName ='paw-outline';
                break;
    
              }
              return <Icon name={iconName} size={20} color="#900" />
    
            }
    
          })}
    >
      <Tab.Screen name="Top1" component={TopTab1Screen} />
      <Tab.Screen name="Top2" component={TopTab2Screen} />
      <Tab.Screen name="Top3" component={TopTab3Screen} />

    </Tab.Navigator>
  );
};