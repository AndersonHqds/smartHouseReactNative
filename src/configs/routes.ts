import Home from '../pages/Home';
import Temperature from '../pages/Temperature';
import Water from '../pages/Water';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: Home,
      },
      Temperature: {
        screen: Temperature,
      },
      Water: {
        screen: Water
      }
    },
    {
      headerMode: 'none',
      initialRouteName: 'Home',
    }),
);

export default Routes;
