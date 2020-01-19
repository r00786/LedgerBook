//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Card } from './Common';
import { TextField } from 'react-native-material-textfield';
import { Header } from './Common';
import { connect } from 'react-redux';
import { Dropdown } from 'react-native-material-dropdown';


// import all basic components
class EmpScreen extends Component {
    //Screen2 Component
    render() {
        let data = [{
            value: 'Half',
        }, {
            value: 'Full',
        }, {
            value: 'Over-Time',
        }];
        return (

            <SafeAreaView>
                <ScrollView>
                    <View>
                        <Header headerText='Add Employee'>{}</Header>
                        <Card>
                            <View >
                                <Text style={{ fontSize: 23 }}> Personal Information </Text>
                                <TextField label='Name' ref={this.props.name}  ></TextField>
                                <TextField label='Mobile' ref={this.props.mobile} keyboardType='phone-pad' ></TextField>
                                <TextField label='Address' ref={this.props.address}  ></TextField>
                                <TextField label='Email' ref={this.props.email}  ></TextField>

                            </View>
                        </Card>
                        <Card>
                            <View >
                                <Dropdown label='Wage Type' data={data}></Dropdown>

                            </View>
                        </Card>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
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
        name: state.empscreen.name,
        address: state.empscreen.address,
        mobile: state.empscreen.mobile,
        email: state.empscreen.email
    };
};

export default connect(mapStateToProps, {})(EmpScreen);