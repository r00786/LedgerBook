//This is an example code for NavigationDrawer//
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Splash from './pages/Splash/Splash';
import SideMenu from './pages/SideMenu/SideMenu';




// = createDrawerNavigator({
//   //Drawer Optons and indexing
//   Screen1: {
//     //Title
//     screen: FirstActivity_StackNavigator,
//     navigationOptions: {
//       drawerLabel: 'Demo Screen 1',
//     },
//   },
//   Screen2: {
//     //Title
//     screen: Screen2_StackNavigator,
//     navigationOptions: {
//       drawerLabel: 'Demo Screen 2',
//     },
//   },
//   Screen3: {
//     //Title
//     screen: Screen3_StackNavigator,
//     navigationOptions: {
//       drawerLabel: 'Demo Screen 3',
//     },
//   },
// });
const RootNavigator = createStackNavigator({ Splash, SideMenu }, { headerMode: "none" });

export default createAppContainer(RootNavigator);