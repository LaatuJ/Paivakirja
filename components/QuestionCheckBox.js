import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';


const QuestionCheckBox = props => {
  return (
    <View style={styles.container, styles.CB}>
      <CheckBox />
      <Text style={styles.text}>{props.title}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  CB: {
    height:45,
    width: 380,
    backgroundColor:"#fff",
    borderRadius:20,
    padding:10,
    marginBottom:10,
    flexDirection:"row",
    opacity:0.9,
    
  },
  text: {
    color: '#808080',
    fontSize: 16,
    fontWeight:'bold',
    marginLeft:20
    
  },

});

export default QuestionCheckBox;
