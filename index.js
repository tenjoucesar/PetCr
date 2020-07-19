/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

(async () => {

  AppRegistry.registerComponent(appName, () => App);
})();
// AppRegistry.registerComponent(appName, () => App);
