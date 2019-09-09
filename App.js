/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';
import PokeList from './components/PokeList';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pokeListHeader}>Poke Flat List</Text>
      <PokeList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  pokeListHeader: {
    fontSize: 20,
    color: '#fff'
  }
});

export default App;