import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { CheckBox } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage';


function getThisDate() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = dd + '.' + mm + '.' + yyyy;
  return today;
}

let labels = {
	mita_kiusaus:"Joku kiusasi minua.",
	mita_varkaus:"Joku otti jotain minulle kuuluvaa.",
	mita_inho:"Joku teki jotain, mistä en pitänyt.",
	mita_teinvaarin:"Tein jotain väärin.",
	mita_riitely:"Joku alkoi riidellä tai tapella kanssani.",
	mita_muuta:"Muuta",
	milloin_aamu:"Aamu",
	milloin_iltapaiva:"Iltapäivä",
	milloin_ilta:"Ilta",
	missa_koulu:"Luokassa/koulussa",
	missa_asuntola:"Asuntolassa",
	missa_liikuntasali:"Liikuntasalissa",
	missa_oleskelutila:"Oleskelutiloissa",
	missa_wc:"WC:ssä",
	missa_kanslia:"Kansliassa",
	missa_ruokala:"Ruokalassa",
	missa_ulkona:"Ulkona/pihalla",
	missa_kadulla:"Kadulla",
	missa_kaytavalla:"Käytävällä",
	missa_toissa:"Töissä",
	missa_muualla:"Muualla, missä?",
	kuka_toinen:"Toinen nuori",
	kuka_vanhempihoitaja:"Vanhempi / hoitaja",
	kuka_opettaja:"Opettaja",
	kuka_koulukuraattori:"Koulukuraattori",
	kuka_jokumuu:"Joku muu",
	mitateit_loin:"Löin takaisin",
	mitateit_juoksin:"Juoksin pois",
	mitateit_huusin:"Huusin",
	mitateit_itkin:"Itkin",
	mitateit_kavelinpois:"Kävelin pois rauhallisesti",
	mitateit_rikoinjotain:"Rikoin jotain",
	mitateit_kerroinaiku:"Kerroin aikuiselle",
	mitateit_kerroinkave:"Kerroin kaverille",
	mitateit_envalittanut:"En välittänyt asiasta",
	mitateit_hoidinasianpuhumalla:"Hoidin asian puhumalla",
	mitateit_vihanhallinanmenetelma:"Käytin vihanhallinan menetelmää (mitä)",
	mitateit_sosiaalinentaito:"Käytin sosiaalista taitoa (mitä)",
	mitateit_jotainmuuta:"Jotain muuta",
	viha_kihisinraivosta:"Kihisin raivosta",
	viha_todellavihainen:"Todella vihainen",
	viha_melkovihainen:"Melko vihainen",
	viha_lievaviha:"Lievästi vihainen, mutta silti OK",	
	viha_enlainkaan:"En lainkaan vihainen",
	hallinta_1:"Huonosti",
	hallinta_2:"En kovin hyvin",
	hallinta_3:"Melko hyvin",
	hallinta_4:"Hyvin",
	hallinta_5:"Todella hienosti"
}

//Käytetään datan tallentamiseen
async function SaveData (key, value) {
  let d = new Date();
  let date = getThisDate()
  //let date = "11.05.2020"
  let data = JSON.stringify({ "lastModified":d.toString() ,[key]: value })
  console.log(data)
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

function Handler(key, value) {
  let out = ""
  for (const [k, v] of Object.entries(labels)) {
    if (v === key) {
      out = k;
    }
  }
  SaveData(out, value)
}

const QuestionCheckBox = props => {
  const [state, setState] = useState(false)

  function Press(key) {
    setState(!state)
    Handler(key, !state)

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
