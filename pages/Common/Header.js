// import libraries for making a registerComponent

import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';


// make a component
const styling = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 60,
    flexDirection: 'row',
    paddingTop: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'

  },
  textStyle: {
    fontSize: 20
  }, imageThumbnail: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginRight: 10,
    resizeMode: 'contain',
    alignItems: 'center',
  }
};
const Header = (obj) => {
  const { textStyle, viewStyle } = styling;
  return (
    //View tag is used for positioning
    <View style={viewStyle}>
      {(obj.leftImage) ? <TouchableOpacity onPress={() => {
       obj.backArrowClick();
      }}><Image style={styling.imageThumbnail} source={obj.leftImage} /></TouchableOpacity> : <View />}
      <Text style={textStyle}> {obj.headerText} </Text>


    </View>
  );
};



//making the component available to other parts
export { Header };
