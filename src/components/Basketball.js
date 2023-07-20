import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Basketball() {
  return (
    <View style={styles.container}>
        <Text>Basketball</Text>
        <Text>Basketball</Text>
        <Text>Basketball</Text>
        <Text>Basketball</Text>
        <Text>Basketball</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
     fontFamily: 'Roboto',
    },
  });