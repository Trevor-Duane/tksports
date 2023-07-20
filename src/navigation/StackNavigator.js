import { createStackNavigator } from '@react-navigation/stack';
import Details from '../screens/stack/Details';
import Home from '../screens/bottom-tabs/Home';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f1f2f2',
          borderBottomWidth: 1,
          borderBottomColor: '#e5e5e5',
        },
      }}
    >
      <Stack.Screen
      options={{
        headerShown: false,
      }}
        name="HomeScreen"
        component={Home}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default StackNavigator;