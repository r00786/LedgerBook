import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, Text } from 'react-native';
import { splashTimeOut, userLoginStatus } from '../Actions';
import { StackActions, NavigationActions } from 'react-navigation'



class Splash extends Component {
    state = {
        timer: null
    };
    componentWillMount() {

    }


    openLogin() {
        var a = this.props.alreadyLoggedIn;
        if (a != null && a == '1') {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: "DrawerNavigatorExample" })
                ]
            });

            this.props.navigation.dispatch(resetAction)
        }


    }



    checkIfUserLoggedInOrNot() {
        this.props.userLoginStatus();
        this.openLogin();
    }


    render() {
        const { image, imageContainer, centerViewStyle, textStyle } = styles;
        return (
            <View style={imageContainer}>
                <View style={centerViewStyle} >
                    <Text style={textStyle} >Ledger Book</Text>
                </View>
                {this.checkIfUserLoggedInOrNot()}
            </View>
        );
    }

}

const styles = {
    imageContainer: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#756BFF'
    },
    image: {
        width: undefined,
        height: undefined,
        flex: 1
    },
    centerViewStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: '#FFFFFF',
        fontSize: 20
    }
};

const mapStateToProps = (state) => {
    return {
        splashChange: state.splash.splashScreenChange
        , alreadyLoggedIn: state.splash.alreadyLoggedIn
    };
};

export default connect(mapStateToProps, { splashTimeOut, userLoginStatus })(Splash);