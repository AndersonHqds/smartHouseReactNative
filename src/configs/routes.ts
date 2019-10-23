import Home from '../pages/Home';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
    },
    {
      headerMode: 'none',
      initialRouteName: 'Home',
    },
  ),
);

export default Routes;
