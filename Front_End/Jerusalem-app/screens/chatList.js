import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const ChatList = ({ navigation }) => {
    const data = [
        { id: '1', name: 'John Doe', lastMessage: 'Hey there!' },
        { id: '2', name: 'Jane Smith', lastMessage: 'How\'s it going?' },
        // Add more data for additional chat items
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('chat_screen')}>
            <View style={styles.chatItem}>
                <View style={styles.chatInfo}>
                    <View style={styles.avatar}></View>
                    <View style={styles.chatDetails}>
                        <Text style={styles.chatName}>{item.name}</Text>
                        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.chatList}>
            <Text style={styles.chatListHeader}>Chat List</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    chatList: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        overflow: 'hidden',
        marginTop: 20,
    },
    chatListHeader: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },
    chatItem: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        cursor: 'pointer',
    },
    chatInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
        backgroundColor: '#ccc',
    },
    chatDetails: {
        flex: 1,
    },
    chatName: {
        fontWeight: 'bold',
    },
    lastMessage: {
        color: '#888',
    },
});
export default ChatList;
