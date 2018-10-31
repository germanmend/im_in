import {AppRegistry} from 'react-native';
import App from './app/App.js';
import {name as appName} from './app.json';
import firebase from 'firebase'

const config = {
  databaseURL: 'https://quienva-898c9.firebaseio.com',
  projectId: 'quienva-898c9',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

AppRegistry.registerComponent(appName, () => App);
