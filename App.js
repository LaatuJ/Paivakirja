import React from 'react';
import {StyleSheet, View, ScrollView, Text, ImageBackground} from 'react-native';
import QuestionCheckBox from './components/QuestionCheckBox';
import QuestionText from './components/QuestionText';
import Btn from './components/btn';

import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"



//Svelluksen aloitus sivu.
function Start({navigation}) {
  return(
    <View style={styles.start}>
      <Text style={styles.textH1}>The Mood</Text>
      <Btn title="Aloitetaan" onPress={() => {navigation.navigate("The Mood")}}/>
    </View>
  )
}

//Sovelluksen kyselysivu.
function TheMood({navigation}) {

  return(
    <ImageBackground source={require('./images/bgkuva.jpg')} style={styles.image}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textH1}>Millä tuulella tänään?</Text>
          <Text style={styles.textH3}>Kerro hieman tämänpäivän vihanhallinnastasi.</Text>

          <Text style={styles.textH2}>Mitä tapahtui?</Text>
          <View style={styles.item}><QuestionCheckBox title="Joku kiusasiminua."/></View>
          <View style={styles.item}><QuestionCheckBox style={styles.item} title="Joku otti jotain minulle kuuluvaa."/></View>
          <View style={styles.item}><QuestionCheckBox style={styles.item} title="Joku teki jotain, mistä en pitänyt."/></View>
          <View style={styles.item}><QuestionCheckBox style={styles.item} title="Tein jotain väärin."/></View>
          <View style={styles.item}><QuestionCheckBox style={styles.item} title="Joku alkoi riidellä tai tapella kanssani."/></View>
          <View style={styles.item}><QuestionText title="Muuta?"/></View>

          <Text style={styles.textH2}>Milloin?</Text>
          <View style={styles.item}><QuestionCheckBox title="Aamu"/></View>
          <View style={styles.item}><QuestionCheckBox title="Iltapäivä"/></View>
          <View style={styles.item}><QuestionCheckBox title="Ilta"/></View>

          <Text style={styles.textH2}>Missä olit?</Text>
          <View style={styles.item}><QuestionCheckBox title="Luokassa/koulussa"/></View>
          <View style={styles.item}><QuestionCheckBox title="Asuntolassa"/></View>
          <View style={styles.item}><QuestionCheckBox title="Liikuntasalissa"/></View>
          <View style={styles.item}><QuestionCheckBox title="Oleskelutiloissa"/></View>
          <View style={styles.item}><QuestionCheckBox title="WC:ssä"/></View>
          <View style={styles.item}><QuestionCheckBox title="Kansliassa"/></View>
          <View style={styles.item}><QuestionCheckBox title="Ruokalassa"/></View>
          <View style={styles.item}><QuestionCheckBox title="Ulkona/pihalla"/></View>
          <View style={styles.item}><QuestionCheckBox title="Kadulla"/></View>
          <View style={styles.item}><QuestionCheckBox title="Käytävällä"/></View>
          <View style={styles.item}><QuestionCheckBox title="Töissä"/></View>
          <View style={styles.item}><QuestionText title="Muualla, missä"/></View>

          <Text style={styles.textH2}>Kuka tuo toinen henkilö oli?</Text>
          <View style={styles.item}><QuestionCheckBox title="Toinen nuori"/></View>
          <View style={styles.item}><QuestionCheckBox title="Vanhempi / hoitaja"/></View>
          <View style={styles.item}><QuestionCheckBox title="Opettaja"/></View>
          <View style={styles.item}><QuestionCheckBox title="Koulukuraattori"/></View>
          <View style={styles.item}><QuestionCheckBox title="Joku muu"/></View>

          <Text style={styles.textH2}>Mitä teit?</Text>
          <View style={styles.item}><QuestionCheckBox title="Löin takaisin"/></View>
          <View style={styles.item}><QuestionCheckBox title="Juoksin pois"/></View>
          <View style={styles.item}><QuestionCheckBox title="Huusin"/></View>
          <View style={styles.item}><QuestionCheckBox title="Itkin"/></View>
          <View style={styles.item}><QuestionCheckBox title="Kävelin pois rauhallisesti"/></View>
          <View style={styles.item}><QuestionCheckBox title="Rikoin jotain"/></View>
          <View style={styles.item}><QuestionCheckBox title="Kerroin aikuiselle"/></View>
          <View style={styles.item}><QuestionCheckBox title="Kerroin kaverille"/></View>
          <View style={styles.item}><QuestionCheckBox title="En välittänyt asiasta"/></View>
          <View style={styles.item}><QuestionCheckBox title="Hoidin asian puhumalla"/></View>
          <View style={styles.item}><QuestionText title="Käytin vihanhallinan menetelmää (mitä)"/></View>
          <View style={styles.item}><QuestionText title="Käytin sosiaalista taitoa (mitä)"/></View>
          <View style={styles.item}><QuestionText title="Jotain muuta?"/></View>

          <Text style={styles.textH2}>Viha?</Text>
          <View style={styles.item}><QuestionCheckBox title="Kihisin raivosta"/></View>
          <View style={styles.item}><QuestionCheckBox title="Todella vihainen"/></View>
          <View style={styles.item}><QuestionCheckBox title="Melko vihainen"/></View>
          <View style={styles.item}><QuestionCheckBox title="Lievästi vihainen, mutta silti OK"/></View>
          <View style={styles.item}><QuestionCheckBox title="En lainkaan vihainen"/></View>

          <Text style={styles.textH2}>Hallinta?</Text>
          <View style={styles.item}><QuestionCheckBox title="Huonosti"/></View>
          <View style={styles.item}><QuestionCheckBox title="En kovin hyvin"/></View>
          <View style={styles.item}><QuestionCheckBox title="Melko hyvin"/></View>
          <View style={styles.item}><QuestionCheckBox title="Hyvin"/></View>
          <View style={styles.item}><QuestionCheckBox title="Todella hienosti"/></View>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

//Täällä voi katsoa vanhoja kirjauksia ja poistaa historian
function Settings({navigation, status}) {
  return(
    <ImageBackground source={require('./images/bgkuva.jpg')} style={styles.image} >
      <View style={styles.container}>
        <Text style={styles.textH1}>Päiväkirjat</Text>
        <Btn style={{ backgroundColor: "green"}} title="Näytä" onPress={() => {navigation.navigate("Historia")}}/>
        <Text style={styles.textH1}>Asetukset</Text>
        <Text style={{...styles.textH1, color: "red"}}>VAARA-ALUE</Text>
        <Text style={styles.textH3}>Voit halutessasi tyhjentää kaikki tiedot tästä laitteesta painalamma pitkään alla olevaa nappia pitkään.</Text>
        <Text>Tietojen tila: {status}</Text>
        <Btn title="Poista" onPress={() => {}}/>
        <Text style={styles.textH3}>Tietoja ei voi palauttaa takaisin!</Text>
        </View>
    </ImageBackground>
  )
}

//Tämä sivu näyttää historian
function History() {
  return(
    <ImageBackground source={require('./images/bgkuva.jpg')} style={styles.image}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textH1}>Kirjaukset</Text>
          <Text style={styles.textH3}>Valitse joku vanhoista päiväkirjoista</Text>
          <Text style={styles.textH3}>Plase holder</Text>
        </View>
      </ScrollView>
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
                              headerRight: props => <Btn style={{ backgroundColor: "green"}} title="Asetukset" onPress={() => {navigation.navigate("Asetukset")}}/>,
                              })} name="The Mood" component={TheMood}/>
        <Main.Screen options={{ headerStyle: {backgroundColor: 'transparent'} }} name="Asetukset" component={Settings}/>
        <Main.Screen name="Historia" component={History}/>
      </Main.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    flex:1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    backgroundColor:'rgba(255,255,255, 0.6)',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  start: {
    backgroundColor:'#154B46',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  scrollView: {
    paddingTop: 10,
  },
  textH3: {
    color: '#000000',
    fontSize: 18,
  },
  textH2: {
    color: '#000000',
    fontSize: 23,
  },
  textH1:{
    color: '#000000',
    fontSize: 28,
  },
  item: {
    marginBottom: 5,
  },
});

