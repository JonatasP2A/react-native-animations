import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Examples from '../screens/Examples';
import MeetTheCrew from '../screens/MeetTheCrew';
import CreditCard from '../screens/CreditCard';

const App = createNativeStackNavigator();

export type RootStackParamList = {
  Examples: undefined;
  MeetTheCrew: undefined;
  CreditCard: undefined;
};

const Routes: React.FC = () => (
  <App.Navigator>
    <App.Screen name="React Native Animations" component={Examples} />
    <App.Screen
      name="MeetTheCrew"
      component={MeetTheCrew}
      options={{ header: () => null }}
    />
    <App.Screen name="CreditCard" component={CreditCard} />
  </App.Navigator>
);

export default Routes;
