import { View, StyleSheet, ScrollView } from "react-native";
import { PostItem } from "../components/PostItem";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


export function ShopScreen(){

    return (
        <View style={styles.background}>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.PostItemcontainer}>
                    <View style={styles.container}>
                        <PostItem source={require('../assets/images.jpg')}>

                        </PostItem>
                    </View>
                    <View style={styles.container}>
                        <PostItem source={require('../assets/images.jpg')}>

                        </PostItem>
                    </View>
                    <View style={styles.container}>
                        <PostItem source={require('../assets/images.jpg')}>

                        </PostItem>
                    </View>
                </View>
            </ScrollView>
        </View>
    );

};

const styles = StyleSheet.create({

    background: {
        height: hp('100%'),
        flex: 1,
        backgroundColor: '#e6e6e6',
    },
    container: {
        marginTop: 20, // Adjust spacing between NavBar and PostItem
    },
    PostItemcontainer: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    }

})