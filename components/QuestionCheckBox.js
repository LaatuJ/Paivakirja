import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { CheckBox } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage';


function Saver() {
  console.log("Toimii");
}
function getThisDate() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = dd + '.' + mm + '.' + yyyy;
  return today;
}
//haetaan tallennettu data
function Saved() {
  AsyncStorage.getAllKeys((err, keys) => {
    AsyncStorage.multiGet(keys, (err, stores) => {
      stores.map((result, i, store) => {
        // get at each store's key/value so you can work with it

        console.log(store[i][0] +": "+ store[i][1]);
        //AsyncStorage.removeItem(store[i][0], (err) =>{}) // Tällä rivillä voidaan poistaa dataa!!!
      });
    });
  });
}
//Käytetään datan tallentamiseen
async function SaveData (key, value) {
  let d = new Date();
  //let date = getThisDate()
  let date = "11.05.2020"
  let data = JSON.stringify({ "lastModified":d.toString() ,[key]: value })
  try {
    const value = await AsyncStorage.getItem('mobileno');
      if (value !== null) { 
        await AsyncStorage.setItem(date,data)
      } else {              
        await AsyncStorage.mergeItem(date,data)
      }
  } catch (error) {
    console.log(error)
  } 
} 

const QuestionCheckBox = props => {
  const [state, setState] = useState(false)

  function Press(key) {
    //console.log(!state)
    setState(!state)
    SaveData(key, !state)
    Saved()
  }

  return (
    <View style={styles.container, styles.CB}>
      <CheckBox
      onPress={() => {Press(props.title)}}
      checked={state}
      />
      <Text style={styles.text}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  CB: {
    height:45,
    width: 380,
    backgroundColor:"#fff",
    borderRadius:20,
    padding:10,
    marginBottom:10,
    flexDirection:"row",
    opacity:0.9,
    
  },
  text: {
    color: '#242724',
    fontSize: 16,
    fontWeight:'bold',
    //marginLeft:10
    
  },

});

export default QuestionCheckBox;
