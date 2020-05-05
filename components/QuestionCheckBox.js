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
    justifyContent: 'flex-start',
    alignItems: 'center',
    height:70,
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

export default QuestionCheckBox;
