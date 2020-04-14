import React from 'react';
import {StyleSheet, View, ScrollView, Text, CheckBox} from 'react-native';
import QuestionCheckBox from './components/QuestionCheckBox';
import QuestionText from './components/QuestionText';

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.scrollView}>
            <Text style={styles.textH1}>Millä tuulella tänään?</Text>
            <Text style={styles.textH3}>Kerro hieman tämänpäivän vihanhallinnastasi.</Text>

            <Text style={styles.textH2}>Mitä tapahtui?</Text>
            <QuestionCheckBox title="Joku kiusasiminua."/>
            <QuestionCheckBox title="Joku otti jotain minulle kuuluvaa."/>
            <QuestionCheckBox title="Joku teki jotain, mistä en pitänyt."/>
            <QuestionCheckBox title="Tein jotain väärin."/>
            <QuestionCheckBox title="Joku alkoi riidellä tai tapella kanssani."/>
            <QuestionText title="Muuta?"/>

            <Text style={styles.textH2}>Milloin?</Text>
            <QuestionCheckBox title="Aamu"/>
            <QuestionCheckBox title="Iltapäivä"/>
            <QuestionCheckBox title="Ilta"/>

            <Text style={styles.textH2}>Missä olit?</Text>
            <QuestionCheckBox title="Luokassa/koulussa"/>
            <QuestionCheckBox title="Asuntolassa"/>
            <QuestionCheckBox title="Liikuntasalissa"/>
            <QuestionCheckBox title="Oleskelutiloissa"/>
            <QuestionCheckBox title="WC:ssä"/>
            <QuestionCheckBox title="Kansliassa"/>
            <QuestionCheckBox title="Ruokalassa"/>
            <QuestionCheckBox title="Ulkona/pihalla"/>
            <QuestionCheckBox title="Kadulla"/>
            <QuestionCheckBox title="Käytävällä"/>
            <QuestionCheckBox title="Töissä"/>
            <QuestionText title="Muualla, missä"/>

            <Text style={styles.textH2}>Kuka tuo toinen henkilö oli?</Text>
            <QuestionCheckBox title="Toinen nuori"/>
            <QuestionCheckBox title="Vanhempi / hoitaja"/>
            <QuestionCheckBox title="Opettaja"/>
            <QuestionCheckBox title="Koulukuraattori"/>
            <QuestionCheckBox title="Joku muu"/>

            <Text style={styles.textH2}>Mitä teit?</Text>
            <QuestionCheckBox title="Löin takaisin"/>
            <QuestionCheckBox title="Juoksin pois"/>
            <QuestionCheckBox title="Huusin"/>
            <QuestionCheckBox title="Itkin"/>
            <QuestionCheckBox title="Kävelin pois rauhallisesti"/>
            <QuestionCheckBox title="Rikoin jotain"/>
            <QuestionCheckBox title="Kerroin aikuiselle"/>
            <QuestionCheckBox title="Kerroin kaverille"/>
            <QuestionCheckBox title="En välittänyt asiasta"/>
            <QuestionCheckBox title="Hoidin asian puhumalla"/>
            <QuestionText title="Käytin vihanhallinan menetelmää (mitä)"/>
            <QuestionText title="Käytin sosiaalista taitoa (mitä)"/>
            <QuestionText title="Jotain muuta?"/>

            <Text style={styles.textH2}>Viha?</Text>
            <QuestionCheckBox title="Kihisin raivosta"/>
            <QuestionCheckBox title="Todella vihainen"/>
            <QuestionCheckBox title="Melko vihainen"/>
            <QuestionCheckBox title="Lievästi vihainen, mutta silti OK"/>
            <QuestionCheckBox title="En lainkaan vihainen"/>

            <Text style={styles.textH2}>Hallinta?</Text>
            <QuestionCheckBox title="Huonosti"/>
            <QuestionCheckBox title="En kovin hyvin"/>
            <QuestionCheckBox title="Melko hyvin"/>
            <QuestionCheckBox title="Hyvin"/>
            <QuestionCheckBox title="Todella hienosti"/>
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
    paddingTop: 5,
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
  }
});

export default App;
