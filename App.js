// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import NavigationScreen from './src/navigator/StackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// Redux
import {Provider} from 'react-redux';
import store from './src/redux/store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationScreen />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
