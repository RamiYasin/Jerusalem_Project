import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CusstomeButtone from '../components/CusstomeButtone';
import NavBar from '../components/NavBar';

// Mock data for the feed
const mockData = [
    {
        id: '1',
        username: 'user1',
        imageUrl: 'https://placeimg.com/640/480/nature',
        likes: 256,
        comments: 20,
    },
    {
        id: '2',
        username: 'user1',
        imageUrl: 'https://placeimg.com/640/480/nature',
        likes: 256,
        comments: 20,
    },
    {
        id: '3',
        username: 'user1',
        imageUrl: 'https://placeimg.com/640/480/nature',
        likes: 256,
        comments: 20,
    },
    {
        id: '4',
        username: 'user1',
        imageUrl: 'https://placeimg.com/640/480/nature',
        likes: 256,
        comments: 20,
    }
    // Add more mock data items as needed
];

const ShopScreen = () => {
    // Render each item in the feed
    const renderFeedItem = ({ item }) => (
        <View style={styles.feedItem}>
            <View style={styles.userinfos}>
                <Image source={require('../assets/images.jpg')} style={styles.userfoto} />
                <Text style={styles.userNamefoto}>{item.username}</Text>
            </View>
            <View style={styles.LikesFonts}>
                <Text style={styles.userlikes}>Likes</Text>
                <Text style={styles.userlikes}>{item.likes}</Text>
            </View>
            <View style={styles.ButtonContainer}>
                <CusstomeButtone title="Unfollow"></CusstomeButtone>
                <CusstomeButtone title="Report"></CusstomeButtone>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View>
                <NavBar></NavBar>
            </View>
            <FlatList
                data={mockData}
                keyExtractor={(item) => item.id}
                renderItem={renderFeedItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    CusstomeButton: {
        borderRadius: 30,
    },
    userinfos: {
        flexDirection: 'row',
        justifyContent: 'flex start',
        padding: 5,
    },
    ButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 30,
    },
    LikesFonts: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    userNamefoto: {
        marginLeft: 90,
        backgroundColor: 'transparent',
        fontFamily: 'sans-serif-medium',
        fontSize: 20
    },
    userlikes: {
        fontFamily: 'sans-serif-medium',
        fontSize: 25
    },
    userfoto: {
        height: hp('10%'),
        width: wp('20%'),
        borderRadius: 50,
    },
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        paddingTop: 20,
    },
    feedItem: {
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    username: {
        fontWeight: 'bold',
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 5,
    },
    image: {
        width: '100%',
        height: 300,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        resizeMode: 'cover',
    },
    feedFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    footerText: {
        color: '#555',
    },
});


export default ShopScreen;