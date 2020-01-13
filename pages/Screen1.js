/*This is an Example of Grid View in React Native*/
import React, { Component } from 'react';
//import rect in our project
import { connect } from 'react-redux';
import { getDashBoardItems } from './Actions';
import { FlatGrid } from 'react-native-super-grid';
import { StackActions, NavigationActions } from 'react-navigation'

import {
    StyleSheet,
    View,
    FlatList,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import { Card } from './Common'

//import all the components we will need

class Screen1 extends Component {


    componentDidMount() {
        this.props.getDashBoardItems();
    }
    render() {
        var allItems = this.props.items
        return (allItems != null) ? (
            <View style={styles.MainContainer}>
                <FlatGrid
                  itemDimension={130}
                     items={allItems}
                    renderItem={({ item, index }) => {                     

                        return  <View style={style()}>
                            <TouchableOpacity onPress={()=>{
                                console.log(item.item_nav )
                                this.props.navigation.navigate(item.item_nav )
                            
                        }}>
                            <Image style={styles.imageThumbnail} source={item.item_img_url} />
                            <Text style={{textAlignVertical: "center",textAlign: "center",}}>{item.item_name}</Text>
                            </TouchableOpacity>
                        </View>
                        
                       
                    }
                    }
                />
            </View>
        ) : <View />;
    }
}


const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: 0,
    },
    imageThumbnail: {
        flex: 1,
        width: null,
        height: 100,
        resizeMode: 'contain'
    },
});
const style = () => {
    return {
        borderRadius: 8,
        borderColor: '#ddd',
        backgroundColor: '#FFFFFF',
        borderBottomwidth: 0,
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',     
        margin: 1,
        flex: 1,
        flexDirection: 'column',        
        justifyContent: 'center'
    };



};

const mapStateToProps = (state) => {
    return {
        items: state.screen1.items
    };
};

export default connect(mapStateToProps, { getDashBoardItems })(Screen1);