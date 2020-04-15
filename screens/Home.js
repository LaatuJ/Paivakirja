// screens/Home.js

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Koti</Text>
        <Button
          title="Päiväkirja"
          onPress={() => this.props.navigation.navigate('Blog' , { testiparametri: 'moro', testi2: 'moi' })}
        />
        <Button
          title="Tapahtumat"
          onPress={() => this.props.navigation.navigate('BlogDetails')}
        />
      </View>
    );
  }
}

export default Home;