import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import React, {useEffect, useState} from 'react'

export default function Post({post}) {
    const navigation = useNavigation();
    const formatDate = (date) => new Date(date).toLocaleDateString();

    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');

    useEffect(() => {
        //handler to get device Height
        setHeight(Dimensions.get('window').height);
        //handler to get device Width
        setWidth(Dimensions.get('window').width);
    }, []);

    const {
        commentCount,
        dateGmt,
        databaseId,
        title,
        content,
        author: {
            node: { name: authorName}
        },
        featuredImage: {
            node: { sourceUrl: imageSrc}
        }

    } = post;

  return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.postImageContainer}>
        <Image style={styles.postImage} source={{uri: imageSrc}}/>
      </TouchableOpacity>

      <Pressable onPress={() => navigation.navigate('Details', {databaseId, commentCount, dateGmt, title, content, authorName, imageSrc})} style={styles.postTitleContainer}>
        <Text style={styles.postTitle}>{title}</Text>
      </Pressable>

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

      {/* <View style={styles.postBodyContainer}>
        <Text numberOfLines={4} style={styles.postBody}>{content}</Text>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
    myWeb: {
        width: '100%',
        height: 40
    },
    Container: {
        padding: 4, 
        marginTop: 6,
        marginBottom: 6,
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
    },
    postBody: {
        fontSize: 15,
    },
  });