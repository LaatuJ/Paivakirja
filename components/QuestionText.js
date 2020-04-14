import React from 'react';
import {View, Text, StyleSheet, CheckBox, TextInput} from 'react-native';
//import {CheckBox} from '@react-native-community/checkbox'

const QuestionText = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <TextInput style={styles.txtInput}/>
    </View>
  )
}



const styles = StyleSheet.create({
  txtInput: {
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height:90,
    width: 400,
    padding:5,
    backgroundColor: '#c7e9d6',
    
  },
  text: {
    color: '#000000',
    fontSize: 16,
  },
});

export default QuestionText;
