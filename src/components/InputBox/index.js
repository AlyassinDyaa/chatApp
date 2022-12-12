import { View, Text, StyleSheet , TextInput} from 'react-native'
import React from 'react'
import {AntDesign, MaterialIcons} from '@expo/vector-icons'
import {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const InputBox = () => {

    const [newMessage, setNewMessage] = useState("");

    const onSend = () => {
        console.warn("Sending a new MESSAGE", newMessage );
        setNewMessage(''); 
    }



  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      {/*ICON*/}
      <AntDesign name="plus" size={20} color="royalblue" />
      {/*INPUT TEXT*/}
      <TextInput value={newMessage} onChangeText={setNewMessage} style={styles.input} placeholder="type your message..."/>
      {/*ICON*/}
      <MaterialIcons onPress={onSend} style={styles.send} name="send" size={16} color="white"/>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        backgroundColor: 'whitesmoke',
        padding: 5,
        paddingHorizontal:10,
        alignItems: "center"
    },
    input:{
        flex: 1,
        backgroundColor:"white",
        padding: 5,
        paddingHorizontal: 10,
        borderColor: "lightgray",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 50,
        marginHorizontal: 10,
        fontSize: 16,
    },
    send:{
        backgroundColor: "royalblue",
        padding: 7,
        borderRadius: 15,
        overflow: 'hidden',

    },
});
export default InputBox