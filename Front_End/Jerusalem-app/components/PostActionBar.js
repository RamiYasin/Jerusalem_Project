import { ImageBackground, StyleSheet, KeyboardAvoidingView, View, StatusBar } from 'react-native';
import Navsympl from './Navsympl';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export function PostActionBar() {
    return (
        <View style={styles.Nav}>
            <View style={styles.navItem}>
                <Navsympl source={require('../assets/chat2.png')} navStyle={styles.Navar}
                >
                </Navsympl>
            </View>

            <View style={styles.navItem}>
                <Navsympl source={require('../assets/profile.png')} navStyle={styles.Navar}>
                </Navsympl>
            </View>

            <View style={styles.navItem}>
                <Navsympl source={require('../assets/menue.png')} navStyle={styles.Navar}>
                </Navsympl>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    Nav: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: wp('80%'),
        alignItems: 'flex-start',
        height: hp('7%'),
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
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