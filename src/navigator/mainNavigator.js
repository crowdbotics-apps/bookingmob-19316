import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen386755Navigator from '../features/BlankScreen386755/navigator';
import BlankScreen486754Navigator from '../features/BlankScreen486754/navigator';
import BlankScreen186753Navigator from '../features/BlankScreen186753/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen386755: { screen: BlankScreen386755Navigator },
BlankScreen486754: { screen: BlankScreen486754Navigator },
BlankScreen186753: { screen: BlankScreen186753Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
