import 'react-native-gesture-handler';
import { ApolloProvider } from '@apollo/client';
import client from './src/lib/Apollo';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
   <ApolloProvider client={client}>
      <RootNavigator/>
   </ApolloProvider>
  );
}