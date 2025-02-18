/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './AppStack';

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    );
  }
}
