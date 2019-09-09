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
    return <TouchableOpacity style={{ backgroundColor: 'transparent' }}>
      <View style={styles.listItemContainer}>
        <Text style={styles.pokeItemHeader}>
          {data.item.name}
        </Text>
        <Image source={{ uri: 'https://res.cloudinary.com/aa1997/image/upload/v1535930682/pokeball-image.jpg' }}
          style={styles.pokeImage} />
      </View>
    </TouchableOpacity>
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