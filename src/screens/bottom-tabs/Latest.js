import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Latest() {
  return (
    <View style={styles.container}>
        <Text>Latest News From TkSports</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
  });