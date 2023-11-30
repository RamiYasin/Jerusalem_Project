import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function CusstomeButtone(props) {
    const { onPress, title = 'Press me' } = props;
    return (
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    );
  }

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        borderWidth: 1, // Adding border width
        borderColor: 'rgba(0, 0, 0, 0.5)', // Border color with transparency
        backgroundColor: 'rgb(242, 242, 242)', // Transparent background
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
      },
});