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
    backgroundColor: '#e3dada',
  },
  num: {
    color: '#000000',
    fontSize: 23,
  },
});

export default ListBtn;