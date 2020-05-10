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
    borderColor: '#808080',
    borderRadius:5,
    padding:10,
    width:350,
    height:40,
    alignItems: 'center',
    marginLeft:5,
    justifyContent: 'center',
  },
  container: {
    padding:5,
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    width:"100%",
    backgroundColor:"#fff",
    borderRadius:20,
    padding:10,
    marginBottom:10,
    height:85,
    width: 380,
    alignItems: 'center',
    
  },
  text: {
    color: '#808080',
    fontSize: 16,
    fontWeight:'bold',
    marginLeft:20,
    padding:0,
  },
});

export default QuestionText;
