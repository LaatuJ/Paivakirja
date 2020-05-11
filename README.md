# Paivakirja


## Importtien asennus
 * npm install react-native-safe-area-context react-native-screens react-native-gesture-handler
 * npm install @react-navigation/stack
 * npm install @react-navigation/native
 * npm install --save @react-native-community/masked-view
 * npx react-native link react-native-gesture-handler
 * npm install @react-native-community/async-storage
 * npx react-native link @react-native-community/async-storage
 * npm i react-native-elements --save
 * npx react-native link react-native-elements



## Cloonaamisen jälkeen ongelmia emulaattorin kanssa?
* avaa CMD/terminal projekti kansioon
* npm install
* npm config set registry "http://registry.npmjs.org"

## Ongelma tilanteissa:

  ### Cloonaamisen jälkeen ongelmia emulaattorin kanssa?
  * avaa CMD/terminal projekti kansioon
  * npm install
  * npm config set registry "http://registry.npmjs.org"

  ### spawnSync ./gradlew EACCES
  * chmod 755 android/gradlew
