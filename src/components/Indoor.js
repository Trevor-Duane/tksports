import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Indoor() {
  return (
    <View style={styles.container}>
        <Text>Indoor</Text>
        <Text>Indoor</Text>
        <Text>Indoor</Text>
        <Text>Indoor</Text>
        <Text>Indoor</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
     fontFamily: 'Roboto',
    },
  });