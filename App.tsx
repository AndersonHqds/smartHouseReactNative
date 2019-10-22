/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Routes from './src/configs/routes';
import { StatusBar } from 'react-native';

const App: React.FC = () => {
  return (
    <>
    <StatusBar backgroundColor="#f7f9fa" barStyle="dark-content"/>
    <Routes/>
    </>
  );
};

export default App;
