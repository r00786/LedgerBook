//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Card ,Button} from './Common';
import { TextField } from 'react-native-material-textfield';
import { Header } from './Common';
import { connect } from 'react-redux';
import { Dropdown } from 'react-native-material-dropdown';
import { BACK_ARROW } from './Assets/Images'


// import all basic components
class EmpScreen extends Component {
    //Screen2 Component
    render() {
        let data = [{
            value: 'Day',
        }, {
            value: 'Hour',
        }];
        return (

            <SafeAreaView style={{flex:1}}>
                 <Header headerText='Add Employee' leftImage={BACK_ARROW} backArrowClick={()=>{
                            this.props.navigation.goBack();
                        }} ></Header>
            
                <ScrollView  >
                    <View>
                       
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
                                <TextField label='Wage Per Day' ref={this.props.wageperday} keyboardType='phone-pad' ></TextField>
                                <TextField label='Wage Per Half Day' ref={this.props.wageperhalfday} keyboardType='phone-pad' ></TextField>
                                <TextField label='Overtime' ref={this.props.mobile} keyboardType='phone-pad' ></TextField>

                            </View>
                          
                        </Card>
                        <Button>Submit</Button>
                      
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }  



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