// screens/Blog.js

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class Blog extends Component {
  render() {
    const {navigate} = this.props.navigation;

    let joku='jotain';

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Päiväkirja</Text>
       
        {//kommentti 
        //  <Text>itemId: {JSON.stringify(this.props)}</Text>
          // kommentti
         console.log(joku, this.props.route.params.testi2)


      
          
        }
        
        <Button
          title="Koti"
          onPress={() => navigate('Home')}
        />
        <Button
          title="Tapahtumat"
          onPress={() => navigate('BlogDetails')}
        />
      </View>
    );
  }
}

export default Blog;