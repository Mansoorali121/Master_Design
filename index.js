/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import IntroScreen from './src/screens/IntroScreen';
import ContactUsScreen from './src/screens/ContactUsScreen';
import HomeScreen from './src/screens/HomeScreen';
import PaymentScreen from './src/screens/PaymentScreen';

AppRegistry.registerComponent(appName, () => PaymentScreen);
