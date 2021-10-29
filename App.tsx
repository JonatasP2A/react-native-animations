import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes';
import LoadAssets from './src/LoadAssets';

import { assets as meetTheCrewAssets } from './src/screens/MeetTheCrew';

const fonts = {
  'AirbnbCereal-Black': require('./assets/fonts/AirbnbCerealBlack.ttf'),
  'AirbnbCereal-Bold': require('./assets/fonts/AirbnbCerealBold.ttf'),
  'AirbnbCereal-Book': require('./assets/fonts/AirbnbCerealBook.ttf'),
  'AirbnbCereal-ExtraBold': require('./assets/fonts/AirbnbCerealExtraBold.ttf'),
  'AirbnbCereal-Light': require('./assets/fonts/AirbnbCerealLight.ttf'),
  'AirbnbCereal-Medium': require('./assets/fonts/AirbnbCerealMedium.ttf'),
};

const assets = [...meetTheCrewAssets];

export default function App() {
  return (
    <LoadAssets assets={assets} fonts={fonts}>
      <Routes />
    </LoadAssets>
  );
}
