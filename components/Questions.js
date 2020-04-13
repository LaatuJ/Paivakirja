import React from 'react';
import {View, Text, StyleSheet, CheckBox, TextInput} from 'react-native';
//import {CheckBox} from '@react-native-community/checkbox'
import ListBtn from './ListBtn'

const QuestionNum = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <View style={styles.btnContainer}>
        <ListBtn title="1" />
        <ListBtn title="2" />
        <ListBtn title="3" />
        <ListBtn title="4" />
        <ListBtn title="5" />
      </View>
    </View>
  );
};

const QuestionCheckBox = props => {
  return (
    <View style={styles.container, styles.CB}>
      <CheckBox />
      <Text style={styles.text}>{props.title}</Text>

    </View>
  )
}

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
  CB: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height:120,
    width: 400,
    padding:5,
    backgroundColor: '#f6dddd',
  },
  container: {
    height:120,
    width: 400,
    padding:5,
    backgroundColor: '#f6dddd',
    
  },
  text: {
    color: '#000000',
    fontSize: 16,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

export {QuestionNum, QuestionCheckBox, QuestionText};
