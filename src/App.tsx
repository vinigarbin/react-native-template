import {NavigationContainer} from '@react-navigation/native';
import {View, StatusBar} from 'react-native';
import Routes from './routes';
import React from 'react';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <View style={{flex: 1, backgroundColor: '#FFF'}}>
        <Routes />
      </View>
    </NavigationContainer>
  );
}
