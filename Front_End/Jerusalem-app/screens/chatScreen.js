import React, { useState, useCallback, useEffect } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
//import ResieverItem from './components/ResieverItem'
//import SenderItem from './components/SenderItem';
//import BackButton from './components/BackButton';
//import TextInput from './components/TextInput';
/*import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';*/

import {GiftedChat} from "react-native-gifted-chat"



export default function ChatScreen() {
    const [messages, setMessages] = useState([])

    useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ])
    }, [])
  
    const onSend = useCallback((messages = []) => {
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, messages),
      )
    }, [])
  
    return (
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }

const styles = StyleSheet.create({
    background: {
        flex: 1,
        // height: hp('100%'),
        backgroundColor: '#E6E6FA',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    down: {
        // marginTop: 10,
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
        //backgroundColor: '#ffbf00'
    }

})