/*This is an Example of Grid View in React Native*/
import React, { Component } from 'react';
//import rect in our project
import { ITEM_NAME, ITEM_SCHEMA } from './Db'
import {
    StyleSheet,
    View,
    FlatList,
    ActivityIndicator,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';
const Realm = require('realm');

//import all the components we will need

export default class Screen1 extends Component {
   
    constructor() {
        super();
        this.state = { realm: null };
    }
    componentDidMount() {
        Realm.open({
            schema: [ITEM_SCHEMA]
        }).then(realm => {
            const items = realm.objects(ITEM_NAME)
            if (items == null || items.length == 0) {
                realm.write(() => {
                    realm.create(ITEM_NAME, {
                        item_name: 'Employees',
                        item_img_url: 'sjkdj',
                        item_nav: 'sjdks'
                    });
                });
            }


            this.setState({ realm });
        });
    }
    render() {
        let allItems = this.state.realm!=null ? this.state.realm.objects(ITEM_NAME) : null;


        return (allItems != null) ? (
            <View style={styles.MainContainer}>
                <FlatList
                    data={allItems}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, flexDirection: 'column', margin: 1, justifyContent: 'center' }}>
                            <Image style={styles.imageThumbnail} source={{ uri: "" }} />
                            <Text>{item.item_name}</Text>
                        </View>
                    )}
                    //Setting the number of column
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
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
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
});