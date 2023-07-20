import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CommentsCard() {
  return (
    <View style={styles.container}>
      <View style={styles.commentDetails}>
        <Text style={styles.commentAuthor}>John Doe</Text>
        <Text style={styles.commentDate}>Two Days Ago</Text>
      </View>

      <View style={styles.commentBox}>
        <Text style={styles.theComment}>Reprehenderit velit duis proident occaecat excepteur pariatur quis. Irure incididunt ad et Lorem irure ad exercitation exercitation amet aliqua est. Culpa pariatur aliqua ipsum ipsum ex ex ullamco dolore.</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 4, 
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    commentDetails: {},
    commentAuthor: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    commentDate: {
        fontSize: 12,
        color: '#999',
    },
    commentBox: {
        paddingTop: 4,
        paddingBottom: 5,
    },
    theComment: {
        fontSize: 14,
        color: '#999',
    },
});