import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, View, Text } from 'react-native';
import StackNavigator from './StackNavigator';
import Latest from '../screens/bottom-tabs/Latest';
import LiveScores from '../screens/bottom-tabs/LiveScores';
import Popular from '../screens/bottom-tabs/Popular';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: '#f1f2f2',
          borderBottomWidth: 1,
          borderBottomColor: '#e5e5e5',
        },
        tabBarIconStyle: {
          marginTop: 4,
        },
        tabBarActiveBackgroundColor: '#234CA1',
        tabBarItemStyle: {
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.focusedLabelContainer}>
                <Image style={styles.labelIcon} source={require('../assets/icons/_home.png')} />
                <Text style={styles.focusedLabel}>Home</Text>
              </View>
            ) : (
              <View style={styles.labelContainer}>
                  <Image style={styles.labelIcon} source={require('../assets/icons/home.png')} />
                  <Text style={styles.label}>Home</Text>
              </View>
            )
          }
        }}
      />

      <Tab.Screen
        name="Latest"
        component={Latest}
        options={{
          tabBarLabel: 'Latest',
          headerTitle: 'Latest News',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.focusedLabelContainer}>
                <Image style={styles.labelIcon} source={require('../assets/icons/_electricity.png')} />
                <Text style={styles.focusedLabel}>Latest</Text>
              </View>
            ) : (
              <View style={styles.labelContainer}>
                  <Image style={styles.labelIcon} source={require('../assets/icons/electricity.png')} />
                  <Text style={styles.label}>Latest</Text>
              </View>
            )
          }
        }}
      />

      <Tab.Screen
        name="Popular"
        component={Popular}
        options={{
          tabBarLabel: 'Popular',
          headerTitle: 'Popular News',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.focusedLabelContainer}>
                <Image style={styles.labelIcon} source={require('../assets/icons/_fire.png')} />
                <Text style={styles.focusedLabel}>Popular</Text>
              </View>
            ) : (
              <View style={styles.labelContainer}>
                  <Image style={styles.labelIcon} source={require('../assets/icons/fire.png')} />
                  <Text style={styles.label}>Popular</Text>
              </View>
            )
          }
        }}
      />

      <Tab.Screen
        name="Tk Livescores"
        component={LiveScores}
        options={{
          tabBarLabel: 'Tk Livescores',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.focusedLabelContainer}>
                <Image style={styles.labelIcon} source={require('../assets/icons/_signal-stream.png')} />
                <Text style={styles.focusedLabel}>Tk LiveScores</Text>
              </View>
            ) : (
              <View style={styles.labelContainer}>
                  <Image style={styles.labelIcon} source={require('../assets/icons/signal-stream.png')} />
                  <Text style={styles.label}>Tk LiveScores</Text>
              </View>
            )
          }
        }}
      />
    </Tab.Navigator>
  );
}
export default TabNavigator;

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusedLabelContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelIcon: {
    width: 22,
    height: 22,
  },
  label: {
    color: '#234CA1',
    fontSize: 14,
  },
  focusedLabel: {
    color: '#FFF',
    fontSize: 14,
  },
});
