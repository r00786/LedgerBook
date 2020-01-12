import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ onPressed, children }) => {
  const { buttonStyle, textStyle } = style;
return (<TouchableOpacity onPress={onPressed} style={buttonStyle}>
    <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

  const style = {
    textStyle: {
      alignSelf: 'center',
      color: '#ffffff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10
    },
    buttonStyle: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#007aff',
      borderWidth: 1,
      margin: 10,      
      borderRadius: 20,
      borderColor: '#007aff',
      marginRight: 5,
      marginLeft: 5


    }
  };

export { Button };
