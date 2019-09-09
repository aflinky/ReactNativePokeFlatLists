import React, { PureComponent } from 'react';
import {
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  View,
  Image
} from 'react-native';
import styles from '../styles/styles'
import PokeCard from './PokeCard'

export default class pokeList extends PureComponent {
  state = {
    pokeList: [],
    loading: true
  }

  async componentDidMount() {
    try {
      const pokemonAPICall = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const pokemon = await pokemonAPICall.json();
      this.setState({ pokeList: pokemon.results, loading: false });
    }
    catch (err) {
      console.log("Error fetching data ---", err)
    }
  }

  renderItem(data) {
    return <PokeCard {...data.item} />
  }

  render() {
    const { pokeList, loading } = this.state;
    if (!loading) {
      return <FlatList
        data={pokeList}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.name}
      />
    }
    else {
      return <ActivityIndicator />
    }
  }
}