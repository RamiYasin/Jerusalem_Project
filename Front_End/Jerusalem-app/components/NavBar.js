import React from 'react';
import { ImageBackground, StyleSheet, KeyboardAvoidingView, View, StatusBar } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Navsympl from './Navsympl';
import { useNavigation } from '@react-navigation/native';

export default function NavBar() {

    const navigation = useNavigation();

    const onChatItemPressed = () => {
        navigation.navigate('Chatlist')
      }

    return (
        <View style={styles.Nav}>
            <View style={styles.navItem}>
                <Navsympl  source={require('../assets/chat2.png')}navStyle={styles.Navar}onPress={onChatItemPressed}
                >
                </Navsympl>
            </View>

            <View style={styles.navItem}>
                <Navsympl  source={require('../assets/profile.png')}navStyle={styles.Navar}>
                </Navsympl>
            </View>

            <View style={styles.navItem}>
            <Navsympl  source={require('../assets/menue.png')}navStyle={styles.Navar}>
                </Navsympl>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Nav: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: wp('100%'),
        alignItems: 'flex-start',
        height: hp('7%'),
        backgroundColor: '#e6e6e6',
        borderRadius: 60/2,
    },
    navBut: {
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 26,
    },
    navItem: {
        marginRight: 30
       // position: 'relativ',
        //marginHorizontal: 10,
       // justifyContent: 'flex-start', // Add spacing between Navsympl components
      },
      Navar:{
       // backgroundColor:'#FF69B4',
        height: hp('5%'),
        width: wp('10%'),
      }
});
