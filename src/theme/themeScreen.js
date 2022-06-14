import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const styles = StyleSheet.create({

    styleGlobal : {
        paddingHorizontal: 30,

    },
    styleText:{
        fontSize:30,
        color:'black',

    },
    styleTextButton:{
        fontSize:25,
        color:'white',

    },
    containerButton:{
        flexDirection: 'row',


    },
    styleB1:{
        width:100,
        height:100,
        backgroundColor:'red',
        borderRadius:20,
        alignItems: 'center',
        justifyContent:'center',
        margin:10,

    },
    styleB2:{
        width:100,
        height:100,
        backgroundColor:'#5856D6',
        borderRadius:20,
        alignItems: 'center',
        justifyContent:'center',
        margin:10,
    },
    avatarContainer:{
        alignItems:'center',
        margin:20,
    },
    avatar:{
        height:150,
        width:150,
        borderRadius:80,
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 50,
    },
    menuBoton: {
        marginVertical: 10,
    },
    menuTexto: {
        fontSize: 20,
        color:'black',
    },


});
