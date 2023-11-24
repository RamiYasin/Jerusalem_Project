import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

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
            <Text style={styles.username}>{item.username}</Text>
            <Image source={require('../assets/images.jpg')} style={styles.image} />
            <View style={styles.feedFooter}>
                <Text>Likes: {item.likes}</Text>
                <Text>Comments: {item.comments}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={mockData}
                keyExtractor={(item) => item.id}
                renderItem={renderFeedItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
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