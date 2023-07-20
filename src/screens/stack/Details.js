import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import CommentsCard from '../../components/shared/CommentsCard'
import HTMLView from 'react-native-htmlview';
import React from 'react'

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();

  const formatDate = (date) => new Date(date).toLocaleDateString();


  const { commentCount, authorName, title, dateGmt, content, imageSrc } = route.params;
  return (
    <ScrollView>
      <View style={styles.Container}>
        <TouchableOpacity
          style={styles.postImageContainer}
        >
          <Image style={styles.postImage} source={{ uri: imageSrc }} />
        </TouchableOpacity>

        <View style={styles.postTitleContainer}>
          <Text style={styles.postTitle}>{title}</Text>
        </View>

        <View style={styles.postDetails}>
          <View style={styles.IconText}>
            <Image style={styles.postIcon} source={require('../../assets/icons/user.png')} />
            <Text style={styles.postText}>{authorName}</Text>
          </View>

          <View style={styles.IconText}>
            <Image style={styles.postIcon} source={require('../../assets/icons/clock.png')} />
            <Text style={styles.postText}>{formatDate(dateGmt)}</Text>
          </View>

          <View style={styles.IconText}>
            <Image style={styles.postIcon} source={require('../../assets/icons/comment.png')} />
            <Text style={styles.postText}>{commentCount || 0}</Text>
          </View>

          <View style={styles.IconText}>
            <Image style={styles.postIcon} source={require('../../assets/icons/reading-book.png')} />
            <Text style={styles.postText}>{commentCount}</Text>
          </View>
        </View>

        <View style={styles.postBodyContainer}>
          {/* <Text style={styles.postBody}>{content}</Text> */}
          <HTMLView value={content} style={styles.htmlView}/>
        </View>
      </View>

      <View style={styles.commentContainer}>
        <View style={styles.commentContainerTitle}>
          <Text style={styles.commentTitle}>Comments</Text>
        </View>

        <View style={styles.commentCardContainer}>
          <CommentsCard/>
          <CommentsCard/>
          <CommentsCard/>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  htmlView:{
    flex: 1,
  },
  Container: {
    marginBottom: 6,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#d8d8d8',
  },
  postImageContainer: {
    backgroundColor: '#ccc',
  },
  postImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  postTitleContainer: {
    paddingTop: 5,
    paddingLeft: 6,
    paddingRight: 6,
    paddingBottom: 2,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 4,
    paddingTop: 4,
  },
  postDetails: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 4,
    paddingLeft: 6,
    paddingRight: 6,
  },
  IconText: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postIcon: {
    width: 18,
    height: 18,
  },
  postText: {
    fontSize: 12,
    paddingLeft: 6,
  },
  postBodyContainer: {
    paddingTop: 4,
    paddingBottom: 6,
    paddingLeft: 6,
    paddingRight: 6,
  },
  postBody: {
    fontSize: 15,
  },
  commentContainer: {
    paddingBottom: 4,
  },
  commentContainerTitle: {
    paddingBottom: 8,
  },
  commentTitle: {
    fontSize: 18,
    paddingLeft: 4,
    paddingRight: 4,
    fontWeight: 'bold',
  },
  commentCardContainer: {
    backgroundColor: '#fff',
    paddingLeft: 6,
    paddingRight: 6,
  },
});