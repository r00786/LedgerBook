import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import SideMenuComp from './SideMenuComp';
import React, { Component } from 'react';
import Screen1 from '../Screen1'
import { View, Text, TouchableOpacity, Image } from 'react-native';

class NavigationDrawerStructure extends Component {
    //Structure for the navigatin Drawer
    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    {/*Donute Button Image */}
                    <Image
                        source={require('../../images/drawer.png')}
                        style={{ width: 25, height: 25, marginLeft: 5 }}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}


const FirstActivity_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    First: {
        screen: Screen1,
        navigationOptions: ({ navigation }) => ({
            title: 'Dashboard',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});

// const Screen2_StackNavigator = createStackNavigator({
//     //All the screen from the Screen2 will be indexed here
//     Second: {
//         screen: Screen2,
//         navigationOptions: ({ navigation }) => ({
//             title: 'emp-screen',
//             headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//             headerStyle: {
//                 backgroundColor: '#FF9800',
//             },
//             headerTintColor: '#fff',
//         }),
//     },
// });

// const Screen3_StackNavigator = createStackNavigator({
//     //All the screen from the Screen3 will be indexed here
//     Third: {
//         screen: Screen3,
//         navigationOptions: ({ navigation }) => ({
//             title: 'Demo Screen 3',
//             headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//             headerStyle: {
//                 backgroundColor: '#FF9800',
//             },
//             headerTintColor: '#fff',
//         }),
//     },
// });

export default createDrawerNavigator({
    //Drawer Optons and indexing
    Screen1: {
        //Title
        screen: FirstActivity_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Demo Screen 1',
        },
    },
    // Screen2: {
    //     //Title
    //     screen: Screen2_StackNavigator,
    //     navigationOptions: {
    //         drawerLabel: 'Demo Screen 2',
    //     },
    // },
    // Screen3: {
    //     //Title
    //     screen: Screen3_StackNavigator,
    //     navigationOptions: {
    //         drawerLabel: 'Demo Screen 3',
    //     },
    // },
}, {
    contentComponent: SideMenuComp,
    drawerWidth: 300
});