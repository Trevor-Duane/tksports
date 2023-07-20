import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Football from '../../components/Football';
import Basketball from '../../components/Basketball';
import Boxing from '../../components/Boxing';
import Athletics from '../../components/Athletics';
import Indoor from '../../components/Indoor';

export default function Home() {

  const [isActive, setIsActive] = React.useState(1);

  const games = [
    {
      "id": 1,
      "name": "Football",
      "icon": `${require('../../assets/icons/soccer-ball-variant.png')}`,
      "activeIcon": `${require('../../assets/icons/__soccer-ball-variant.png')}`,
    },
    {
      "id": 2,
      "name": "Basketball",
      "icon": `${require('../../assets/icons/ball-of-basketball.png')}`,
      "activeIcon": `${require('../../assets/icons/_ball-of-basketball.png')}`,
    },
    {
      "id": 3,
      "name": "Boxing",
      "icon": `${require('../../assets/icons/boxing-gloves.png')}`,
      "activeIcon": `${require('../../assets/icons/_boxing-gloves.png')}`,
    },
    {
      "id": 4,
      "name": "Athletics",
      "icon": `${require('../../assets/icons/sprint.png')}`,
      "activeIcon": `${require('../../assets/icons/_sprint.png')}`,
    },
    {
      "id": 5,
      "name": "Indoor Games",
      "icon": `${require('../../assets/icons/soccer-ball-variant.png')}`,
      "activeIcon": `${require('../../assets/icons/__soccer-ball-variant.png')}`,
    }
  ];

    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.topBar}>
          <View>
            <Image style={styles.logo} source={require('../../assets/tkSports-logo.png')} />
          </View>

          <View style={styles.others}>
            <Image style={styles.user} source={require('../../assets/icons/_user.png')} />
          </View>
        </View>

        <View style={styles.filter}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {games.map((game) => (
              <View key={game.id} style={styles.gameContainer}>
                <Pressable onPress={() => {setIsActive(game.id)}} style={isActive === game.id ? styles.activeGame : styles.game}>
                  <Image style={styles.gameIcon} source={isActive === game.id ? game.activeIcon : game.icon} />
                  <Text style={isActive === game.id ? styles.activeGameText : styles.gameText}>{game.name}</Text>
                </Pressable>
            </View>
            ))}

          </ScrollView>
        </View>

        <ScrollView
          style={styles.content}
          contentContainerStyle={{
            justifyContent: 'center',
            flex: 1,
            alignItems: 'center',
            alignItems: 'center',
          }}
        >
          {isActive === 1 && (<Football/>)}
          {isActive === 2 && (<Basketball/>)}
          {isActive === 3 && (<Boxing/>)}
          {isActive === 4 && (<Athletics/>)}
          {isActive === 5 && (<Indoor/>)}
        </ScrollView>


      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f2f2',
    },
    topBar: {
      padding: 6,
      backgroundColor: '#f1f2f2',
      height: 54,
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: '#d8d8d8',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      width: 90,
      height: 50,
    },
    others: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    search: {
      width: 25,
      height: 25,
      marginRight: 10,
    },
    user: {
      width: 34,
      height: 34,
    },
    filter: {
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#d8d8d8',
    },
    gameContainer: {
      padding: 6,
      
    },
    game: {
      backgroundColor: '#f1f2f2',
      borderRadius: 7,
      padding: 6,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    activeGame: {
      backgroundColor: '#234CA1',
      borderRadius: 7,
      padding: 6,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    gameText: {
      fontSize: 16,
    },
    gameIcon: {
      width: 20,
      height: 20,
      marginRight: 4, 
    },
    activeGameText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    content: {
      backgroundColor: '#fff',
      padding: 2,
      height: '100%',
    },
  });