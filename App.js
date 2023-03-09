import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Home } from './screens/Home'
import { FullPost } from './screens/FullPost'
import { Navigation} from './screens/Navigation'

import { 
  View, 
  StyleSheet,
} from 'react-native';

export default function App() {

  return<Navigation />;
}

{/* <View style={styles.container}> 
      
      <Home />
      <FullPost />
      <StatusBar theme='light' />
    </View> */}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});