import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'


export default function Navsympl({ onPress,source, navStyle }) {
  return (
    <TouchableOpacity onPress={ onPress} style={styles.container}>
       <Image source={source} style={[styles.image, navStyle]} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,// + getStatusBarHeight(),
    left: 4,
  },
  image: {
    width: 10,
    height: 10,
  },
})

//Navsympl