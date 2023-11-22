import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { PostActionBar } from "./PostActionBar";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


export function PostItem({ source }) {


    return (
        <View style={styles.container}>
            <View style={styles.postContainer}>
                <Image source={source} style={styles.postImage}>

                </Image>
            </View>
            <View>
                <PostActionBar>
                    
                </PostActionBar>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    /*container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16, // Adjust padding as needed
    },
    postContainer: {
        height: hp('60%'),
        borderWidth: 1,
        borderColor: '#EAEAEA',
        borderRadius: 8,
        marginBottom: 16,
        // Other styles you might want to add like padding, background color, etc.
    },
    postImage: {
        width: '100%',
        aspectRatio: 1, // To maintain the aspect ratio of the image
        borderRadius: 8,
        overflow: 'hidden',
    },*/
    container: {
        flex: 1,
        paddingHorizontal: 16,
        marginLeft:30
    },
    postContainer: {
        borderWidth: 1,
        borderColor: '#EAEAEA',
        borderRadius: 16,
        width: 300, // Setting a width for the post container
        aspectRatio: 1, // Adjust this ratio as needed
    },
    postImage: {
        height: hp('40%'),
        borderRadius: 16,
    },
});