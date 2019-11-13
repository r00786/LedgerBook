/*This is an Example of Grid View in React Native*/
import React, { Component } from 'react';
//import rect in our project
import {
    StyleSheet,
    View,
    FlatList,
    ActivityIndicator,
    Image,
    TouchableOpacity,
} from 'react-native';
//import all the components we will need

export default class Screen1 extends Component {
    constructor() {
        super();
        this.state = {
            dataSource: {},
        };
    }
    componentDidMount() {
        var that = this;
        let items = Array.apply(null, Array(60)).map((v, i) => {
            return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1), name: id };
        });
        that.setState({
            dataSource: items,
        });
    }
    render() {
        return (
            <View style={styles.MainContainer}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, flexDirection: 'column', margin: 1, justifyContent: 'center' }}>
                            <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
                            <Text>item.id</Text>
                        </View>
                    )}
                    //Setting the number of column
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
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