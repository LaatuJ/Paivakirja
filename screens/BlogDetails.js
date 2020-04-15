// screens/BlogDetails.js

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class BlogDetails extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tapahtumat</Text>
        <Button
          title="Koti"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Päiväkirja"
          onPress={() => this.props.navigation.navigate('Blog')}
        />
      </View>
    );
  }
}

export default BlogDetails;