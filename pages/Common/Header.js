// import libraries for making a registerComponent

import React from 'react';
import { Text, View } from 'react-native';


// make a component
const styling = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'

  },
  textStyle: {
    fontSize: 20
  }
};
const Header = (obj) => {
  const { textStyle, viewStyle } = styling;
   return (
     //View tag is used for positioning
     <View style={viewStyle}>
     <Text style={textStyle}> {obj.headerText} </Text>
     </View>
   );
 };


//making the component available to other parts
export { Header };
