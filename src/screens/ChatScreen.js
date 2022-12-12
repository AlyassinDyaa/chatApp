import { View, Text, ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import bg from '../../assets/images/BG.png';

import Message from '../components/Message/Message';
import messages from '../../assets/data/messages.json';
import InputBox from '../components/InputBox';

import {useRoute, useNavigation} from '@react-navigation/native'
import {useEffect} from 'react'

const ChatScreen = () => {


    const route = useRoute();
    const navigation = useNavigation();0


    useEffect(() => { 
    navigation.setOptions({title:route.params.name});
    },[])



  return (

    <KeyboardAvoidingView
    behavior ={Platform.OS === "ios" ? "padding" : "height"} 
    keyboardVerticalOffset={70}
    style={styles.bg}>
        <ImageBackground source={bg} style={styles.bg}>
            <FlatList 
                data = {messages}
                renderItem={({item}) => <Message message ={item}/>}
                style={styles.list}
                inverted 
            />
            <InputBox />
        </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    bg: {
        flex:1,
    },
});



export default ChatScreen