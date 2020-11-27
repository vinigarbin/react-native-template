import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Padrao from '../pages/Padrao';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#FFF'},
    }}>
    <App.Screen name="Padrao" component={Padrao} />
  </App.Navigator>
);

export default AppRoutes;
