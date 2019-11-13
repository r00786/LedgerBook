import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './SideMenu.style';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, Image } from 'react-native';

class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <View style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, flex: 1, flexDirection: "row", height: "100%", backgroundColor: 'lightblue' }} />
                        <Image style={styles.circleImageStyle} source={require('../../images/user.png')} />
                        <Text style={{ marginTop: 30, marginStart: 20, fontSize: 20 }}>Hello World</Text>
                        <Text style={{ marginTop: 5, marginStart: 20, marginBottom: 20 }}>Hello World</Text>
                    </View>
                    <View>
                        <Text style={{ marginTop: 25, marginStart: 20, fontSize: 15 }}>One</Text>
                        <Text style={{ marginTop: 25, marginStart: 20, fontSize: 15 }}>Two</Text>
                        <Text style={{ marginTop: 25, marginStart: 20, fontSize: 15 }}>Three</Text>
                        <Text style={{ marginTop: 25, marginStart: 20, fontSize: 15 }}>four</Text>
                        <Text style={{ marginTop: 25, marginStart: 20, fontSize: 15 }}>Five</Text>
                        <Text style={{ marginTop: 25, marginStart: 20, fontSize: 15 }}>Six</Text>
                    </View>
                </ScrollView>
            </View >

        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;