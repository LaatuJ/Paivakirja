import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

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
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    
  },
  text: {
    color: '#000000',
    fontSize: 16,
  },
});

export default QuestionText;
