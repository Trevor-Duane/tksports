import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Boxing() {
  return (
    <View style={styles.container}>
        <Text>Boxing</Text>
        <Text>Boxing</Text>
        <Text>Boxing</Text>
        <Text>Boxing</Text>  
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
     fontFamily: 'Roboto',
    },
  });