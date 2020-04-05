import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    height:120,
    width: 400,
    padding:5,
    backgroundColor: '#49bfe7',
  },
  text: {
    color: '#ffffff',
    fontSize: 23,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

export default QuestionNum;
