import React from 'react';
import {StyleSheet, View, ScrollView, Text, CheckBox} from 'react-native';
// import QuestionNum from './components/Questions';
import {QuestionNum, QuestionCheckBox, QuestionText} from './components/Questions';

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.scrollView}>
            <Text style={styles.textH1}>Käyttäytyminen</Text>
            <Text style={styles.textH2}>Itsensä vahingoittaminen</Text>
            <QuestionNum title="Ajatukset" />
            <QuestionNum title="Teot" />

            <Text style={styles.textH2}>Itsemurha aikeet</Text>
            <QuestionNum title="Ajatukset" />
            <QuestionNum title="Teot" />
            <QuestionCheckBox title="Alkoholi"/>
            <QuestionCheckBox title="Huumeet"/>
            <QuestionCheckBox title="Lääkehoito"/>
            <QuestionCheckBox title="Poissalolo sovitusta menosta"/>
            <QuestionCheckBox title="Maltin menetys"/>
            <QuestionCheckBox title="Ahminta / Syömättömyys"/>
            <QuestionCheckBox title="Oksentaminen"/>
            <QuestionCheckBox title="Riskiseksi"/>
            <QuestionCheckBox title="Valehtelu"/>
            <QuestionText title="Vapaa teksti"/>

            <Text style={styles.textH1}>Tunteet</Text>
            <QuestionNum title="Viha"/>
            <QuestionNum title="Pelko"/>
            <QuestionNum title="Ahdistus"/>
            <QuestionNum title="Ilo"/>
            <QuestionNum title="Suru"/>
            <QuestionNum title="Häpeä"/>

            <Text style={styles.textH1}>Taidot</Text>
            <QuestionCheckBox title="Viisasmieli"/>
            <QuestionCheckBox title="Havainnointi  (Huomioi mitä tapahtuu) Mitä-taidot"/>
            <QuestionCheckBox title="Kuvailu (anna havaintoihin sanat)"/>
            <QuestionCheckBox title="Osallistuminen (Heittäydy kokemukseesi)"/>
            <QuestionCheckBox title="Tuomitsemattomuus Miten -taidot"/>
            <QuestionCheckBox title="Aisa kerrallaan"/>
            <QuestionCheckBox title="STOP"/>
            <QuestionCheckBox title="Plussat ja miinukset"/>
            <QuestionCheckBox title="TIPP"/>
            <QuestionCheckBox title="Huomion siirtäminen muualle"/>
            <QuestionCheckBox title="Itsensä rauhoittaminen"/>
            <QuestionCheckBox title="Hetken parantaminen"/>
            <QuestionCheckBox title="Radikaali hyväksyminen"/>
            <QuestionCheckBox title="Riippuvuuksien hallinta"/>
            <QuestionCheckBox title="Tunteiden ymmärtäminen ja kuvaaminen"/>
            <QuestionCheckBox title="Toimiminen toisin kuin tunne yllyttää"/>
            <QuestionCheckBox title="Lyhyen ja pitkän aikavälin tavoitteet"/>
            <QuestionCheckBox title="Hallinnan tunteen kehittäminen"/>
            <QuestionCheckBox title="PLEASE Saadaksesi mitä haluat"/>
            <QuestionCheckBox title="GIVE Suhteen muuttaminen parempaan"/>
            <QuestionCheckBox title="FAST Itsensäkunnioituksen säilyttäminen"/>
            <QuestionCheckBox title="Uusien ihmissuhteiden luominen ja haitallisten suhteiden päättäminen"/>
            <QuestionCheckBox title="DIaletiikka"/>
            <QuestionCheckBox title="Validointi"/>
            <QuestionCheckBox title="Käytöksen muuttamisen keinot"/>


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
