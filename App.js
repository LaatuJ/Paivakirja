import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, Text, ImageBackground} from 'react-native';
import QuestionCheckBox from './components/QuestionCheckBox';
import QuestionText from './components/QuestionText';
import Btn from './components/btn';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';

//Kysymysten Keyt ja Valuet
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

var allKeys = GetAllKeys();
var www = [];

function DeleteAll() {
  AsyncStorage.getAllKeys((err, keys) => {
    //console.log(keys);
    AsyncStorage.multiRemove(keys, (err) => {
    });
    console.log("Kaikki poistettu onnistuneesti!")
  });
}

async function GetAllKeys() {
  let key = "";
  try {
      key = await AsyncStorage.getAllKeys();
      console.log(key)
      return(key)
  }   catch (error) {
      console.log(error, 'error')
  }
}


//Svelluksen aloitus sivu.
function Start({navigation}) {
  return(
    <ImageBackground source={require('./images/bgkuva.jpg')} style={styles.image}>
    <View style={styles.start}>
      <Text style={styles.textH1}>The Mood</Text>
      <Btn style={styles.button2} title="Aloitetaan" onPress={() => {navigation.navigate("The Mood")}}/>
    </View>
    </ImageBackground>
  )
}
//Sovelluksen kyselysivu.
function TheMood() {
  return(
    <ImageBackground source={require('./images/bgkuva.jpg')} style={styles.image}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textH1}>Millä tuulella tänään?</Text>
          <Text style={styles.textH3}>Kerro hieman tämänpäivän vihanhallinnastasi.</Text>

          <Text style={styles.textH2}>Mitä tapahtui?</Text>
          <QuestionCheckBox title={labels["mita_kiusaus"]}/>
          <QuestionCheckBox title={labels["mita_varkaus"]}/>
          <QuestionCheckBox title={labels["mita_inho"]}/>
          <QuestionCheckBox title={labels["mita_teinvaarin"]}/>
          <QuestionCheckBox title={labels["mita_riitely"]}/>
          <QuestionText title={labels["mita_muuta"]}/>

          <Text style={styles.textH2}>Milloin?</Text>
          <QuestionCheckBox title={labels["milloin_aamu"]}/>
          <QuestionCheckBox title={labels["milloin_iltapaiva"]}/>
          <QuestionCheckBox title={labels["milloin_ilta"]}/>

          <Text style={styles.textH2}>Missä olit?</Text>
          <QuestionCheckBox title={labels["missa_koulu"]}/>
          <QuestionCheckBox title={labels["missa_asuntola"]}/>
          <QuestionCheckBox title={labels["missa_liikuntasali"]}/>
          <QuestionCheckBox title={labels["missa_oleskelutila"]}/>
          <QuestionCheckBox title={labels["missa_wc"]}/>
          <QuestionCheckBox title={labels["missa_kanslia"]}/>
          <QuestionCheckBox title={labels["missa_ruokala"]}/>
          <QuestionCheckBox title={labels["missa_ulkona"]}/>
          <QuestionCheckBox title={labels["missa_kadulla"]}/>
          <QuestionCheckBox title={labels["missa_kaytavalla"]}/>
          <QuestionCheckBox title={labels["missa_toissa"]}/>
          <QuestionText title={labels["missa_muualla"]}/>

          <Text style={styles.textH2}>Kuka tuo toinen henkilö oli?</Text>
          <QuestionCheckBox title={labels["kuka_toinen"]}/>
          <QuestionCheckBox title={labels["kuka_vanhempihoitaja"]}/>
          <QuestionCheckBox title={labels["kuka_opettaja"]}/>
          <QuestionCheckBox title={labels["kuka_koulukuraattori"]}/>
          <QuestionText title={labels["kuka_jokumuu"]}/>

          <Text style={styles.textH2}>Mitä teit?</Text>
          <QuestionCheckBox title={labels["mitateit_loin"]}/>
          <QuestionCheckBox title={labels["mitateit_juoksin"]}/>
          <QuestionCheckBox title={labels["mitateit_huusin"]}/>
          <QuestionCheckBox title={labels["mitateit_itkin"]}/>
          <QuestionCheckBox title={labels["mitateit_kavelinpois"]}/>
          <QuestionCheckBox title={labels["mitateit_rikoinjotain"]}/>
          <QuestionCheckBox title={labels["mitateit_kerroinaiku"]}/>
          <QuestionCheckBox title={labels["mitateit_kerroinkave"]}/>
          <QuestionCheckBox title={labels["mitateit_envalittanut"]}/>
          <QuestionCheckBox title={labels["mitateit_hoidinasianpuhumalla"]}/>
          <QuestionText title={labels["mitateit_vihanhallinanmenetelma"]}/>
          <QuestionText title={labels["mitateit_sosiaalinentaito"]}/>
          <QuestionText title={labels["mitateit_jotainmuuta"]}/>

          <Text style={styles.textH2}>Viha?</Text>
          <QuestionCheckBox title={labels["viha_kihisinraivosta"]}/>
          <QuestionCheckBox title={labels["viha_todellavihainen"]}/>
          <QuestionCheckBox title={labels["viha_melkovihainen"]}/>
          <QuestionCheckBox title={labels["viha_lievaviha"]}/>
          <QuestionCheckBox title={labels["viha_enlainkaan"]}/>

          <Text style={styles.textH2}>Hallinta?</Text>
          <QuestionCheckBox title={labels["hallinta_1"]}/>
          <QuestionCheckBox title={labels["hallinta_2"]}/>
          <QuestionCheckBox title={labels["hallinta_3"]}/>
          <QuestionCheckBox title={labels["hallinta_4"]}/>
          <QuestionCheckBox title={labels["hallinta_5"]}/>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}
//Täällä voi katsoa vanhoja kirjauksia ja poistaa historian
function Settings({navigation, status}) {
  allKeys = GetAllKeys();
  return(
    <ImageBackground source={require('./images/bgkuva.jpg')} style={styles.image} >
      <View style={styles.container}>
        <Text style={styles.textH6}>Päiväkirjat</Text>
        <Btn style={styles.button3} title="Näytä" onPress={() => {navigation.navigate("Historia")}}/>
        
        </View>
        <View style={styles.container2}>
        <Text style={{...styles.textH1, color: "red"}}>VAARA-ALUE</Text>
        <Text style={styles.textH4}>Voit halutessasi tyhjentää kaikki tiedot tästä laitteesta painalamma pitkään alla olevaa nappia pitkään.</Text>
        <Text>Tietojen tila: {status}</Text>
        <Btn style={styles.button4}  title="Poista" onPress={() => {DeleteAll()}}/>
        <Text style={styles.textH4}>Tietoja ei voi palauttaa takaisin!</Text>
        </View>
    </ImageBackground>
  )
}
//Tämä sivu näyttää historian


function History() {
  const [old, setOld] = useState([])
  //const [but, setBtn] = useState([])
  let kkk = allKeys._55

  console.log(kkk)

  //setBtn(kkk)





    async function GetItems(items) {
    www = [];
    try {
      qqq = await AsyncStorage.getItem(items);
      qqq = JSON.parse(qqq)
    } catch(error){
      console.log(error);
    }
    for(let q in qqq){
      if(qqq[q] === true){
        www.push(q);
      }}
    setOld(www)
  }
  return(
    <ImageBackground source={require('./images/bgkuva.jpg')} style={styles.image}>
      <View style={styles.container}>
      <Text style={styles.textH1}>Kirjaukset</Text>
      <Text style={styles.textH3}>Valitse joku vanhoista päiväkirjoista</Text>
      <ScrollView horizontal={true} >
        {kkk.map((item,key) => (
          <Btn style={styles.button3} key={key} title={item} onPress={() => GetItems(item)} />
        ))}
      </ScrollView>
      <ScrollView>
        {old.map((item,key) => (
          <View style={styles.container7}>
            <Text key={key} style={styles.textH2}>{item}</Text> 
            </View>
        ))}
        
      </ScrollView>
      </View>

    </ImageBackground>
  ) 
}





























const Main = createStackNavigator();

export default function App(){

  return (
    <NavigationContainer>
      <Main.Navigator>
        <Main.Screen options={{headerShown: false}} name="Aloitus" component={Start}/>
        <Main.Screen options={({ navigation }) => ({
                              headerRight: props => <Icon.Button name="settings" backgroundColor="transparent" color="black" size={34} onPress={() => {navigation.navigate("Asetukset")}}/>,
                              })} name="The Mood" component={TheMood}/>
        <Main.Screen options={{ headerStyle: {backgroundColor: 'transparent'} }} name="Asetukset" component={Settings}/>
        <Main.Screen name="Historia" component={History}/>
      </Main.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({

  button2: {
    marginRight:10,
    marginLeft:10,
    marginTop:400,
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:110,
    paddingRight:110,
    backgroundColor:'#f99755',
    borderRadius:20,
    borderWidth: 1,
    borderColor: '#f99755'
  },
  button3: {
    backgroundColor:'#f99755',
    paddingTop:5,
    paddingBottom:5,
    marginRight:5,
    borderRadius:20,
    borderWidth: 1,
    borderColor: '#f99755'
  },
  textH6:{
    fontSize:25,
    fontWeight:"bold",
    color:"#364f6b",
    marginBottom:5,
  },
  button4: {
    backgroundColor:'red',
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:110,
    paddingRight:110,
    marginRight:5,
    borderRadius:20,
    borderWidth: 1,
    borderColor: '#f99755'
  },
  image: {
    flex:1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  container2: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height:45,
    width: 380,
    backgroundColor:"#fff",
    borderRadius:20,
    padding:10,
    marginBottom:10,
    marginLeft:18,
    //flexDirection:"row",
    opacity:0.9,
  },
  container7: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height:70,
    width: 380,
    backgroundColor:"#fff",
    borderRadius:20,
    padding:10,
    marginBottom:10,
    marginLeft:4,
    //flexDirection:"row",
    opacity:0.9,
  },
  start: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  scrollView: {
    paddingTop: 10,
  },
  textH3: {
    color: '#575757',
    fontSize: 18,
  },
  textH2: {
    color: '#364f6b',
    fontSize: 23,
    padding:20,
  },
  textH4: {
    color: 'red',
    textAlign: "center",
    fontSize: 16,
    padding:20,
    fontWeight:'bold',
  },
  textH1:{
    fontSize:25,
    fontWeight:"bold",
    color:"#364f6b",
    marginBottom:40,
  },
});