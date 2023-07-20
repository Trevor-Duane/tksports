import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import Post from './shared/Post';
import { gql, useQuery } from '@apollo/client'
import { gameData } from '../data/myGames';

const GET_ALL_FOOTBALL_POSTS = gql`
  query FootballPosts {
    category(id: "1", idType: DATABASE_ID) {
      posts {
        nodes {
          commentCount
          dateGmt
          date
          databaseId
          desiredSlug
          title
          content
          author {
            node {
              name
            }
          }
          featuredImage {
            node {
              mediaItemUrl
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

export default function Football() {
  const { loading, error, data } = useQuery(GET_ALL_FOOTBALL_POSTS)

  if(loading) return <View style={styles.loaderContainer}>
    <ActivityIndicator size="large" color="#5B75C9"/>
  </View>
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 120,
      }}
    >
        {data.category.posts.nodes.map((post) => (
          <Post key={post.databaseId} post={post}/>
        ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  loaderContainer:{
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
    container: {
     paddingBottom: 20,
    },
  });