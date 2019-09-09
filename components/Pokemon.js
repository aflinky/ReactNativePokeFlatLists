import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/styles'

export default class Pokemon extends PureComponent {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Image source={{ uri: 'https://res.cloudinary.com/aa1997/image/upload/v1535930682/pokeball-image.jpg' }}
          style={styles.pokemonImage} />
        {/*Use navigation.getParam to get the params of navigation prefered since you can set a default value
            therefore not returning undefined and not crashing your app. */}
        <Text style={styles.nameOfPokemon}>{navigation.getParam('name', 'Name of Pokemon')}</Text>
      </View>
    )
  }
}