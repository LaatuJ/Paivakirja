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
    borderColor: '#242724',
    borderRadius:5,
    padding:10,
    width:80,
    height:30,
    alignItems: 'center',
    marginLeft:20,
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
    flexDirection:"row",
    height:45,
    width: 380,
    
  },
  text: {
    color: '#242724',
    fontSize: 16,
    fontWeight:'bold',
    marginLeft:20
  },
});

export default QuestionText;
