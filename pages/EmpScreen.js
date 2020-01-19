//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
import { Card } from './Common';
import { TextField } from 'react-native-material-textfield';
import { onNameChanged } from './Actions';
import { connect } from 'react-redux';

// import all basic components
class EmpScreen extends Component {
    //Screen2 Component
    render() {
        return (
            <Card>
                <View >
                    <Text style={{ fontSize: 23 }}> Personal Information </Text>
                    <TextField label='Name' ref={this.props.name}  onSubmitEditing={this.onSubmit}></TextField>
                </View>
            </Card>
        );
    }
    onNameChange(text) {
        this.props.emailChanged(text);
    }
    onSubmit = () => {
        let { current: field } = this.props.name;     
        console.log(field.value());
      };

   

}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        marginTop: 50,
        justifyContent: 'center',
    },
});
const mapStateToProps = (state) => {
    return {
        name: state.empscreen.name
    };
};

export default connect(mapStateToProps, { onNameChanged })(EmpScreen);