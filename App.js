import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import QuestionNum from './components/QuestionNum';

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.scrollView}>
            <Text style={styles.text}>Käyttäytyminen</Text>
            <QuestionNum title="Ajatukset" />
            <QuestionNum title="Teot"  />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#ffffff',
  },
  scrollView: {
    paddingTop: 10,
  },
  text: {
    color: '#000000',
    fontSize: 23,
  },
  listItems: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
});

export default App;
