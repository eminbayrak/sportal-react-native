import React from 'react'
import { Image, StyleSheet } from 'react-native'

const Logo = () => (
  <Image source={require('../assets/logo.png')} style={styles.image} />
)

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    marginBottom: 8,
  },
})

export default Logo
