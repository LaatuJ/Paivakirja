import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ListBtn = props => {
  return (
    <TouchableOpacity style={styles.container}>
        <Text style={styles.num}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 40,
    width: 40,
    backgroundColor: '#95d1e6',
  },
  num: {
    color: '#ffffff',
    fontSize: 23,
  },
});

export default ListBtn;