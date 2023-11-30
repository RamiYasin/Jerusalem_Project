import { ImageBackground, StyleSheet, KeyboardAvoidingView, View, StatusBar } from 'react-native';
import Navsympl from './Navsympl';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export function PostActionBar() {
    const navigation = useNavigation();
    return (
        <View style={styles.Nav}>
            <View style={styles.navItem}>
                <Navsympl source={require('../assets/herz_48.png')} navStyle={styles.Navar}
                >
                </Navsympl>
            </View>

            <View style={styles.navItem}>
                <Navsympl source={require('../assets/dollar_48.png')} navStyle={styles.Navar} onPress={() => navigation.navigate('ShopScreen')}>
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
        backgroundColor: 'rgb(242, 242, 242)',
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