/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Routes from './src/configs/routes';
import {StatusBar} from 'react-native';
import {Root} from 'native-base';

const App: React.FC = () => {
  return (
    <Root>
      <StatusBar backgroundColor="#f7f9fa" barStyle="dark-content" />
      <Routes />
    </Root>
  );
};

export default App;
