//This is an example code for NavigationDrawer//
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Splash from './pages/Splash/Splash';
import SideMenu from './pages/SideMenu/SideMenu';
import EmpScreen from './pages/EmpScreen'



const RootNavigator = createStackNavigator({ Splash, SideMenu,Screen2:{
    screen:EmpScreen

} }, { headerMode: "none" });

export default createAppContainer(RootNavigator);