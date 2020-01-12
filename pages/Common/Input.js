import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ placeHolder, label, value, onChangeText, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = style;
  return (
<View style={containerStyle}>
<Text style={labelStyle}>
{label}
</Text>
<TextInput
placeholder={placeHolder}
value={value}
onChangeText={onChangeText}
style={inputStyle}
secureTextEntry={secureTextEntry}
/>

</View>
  );
};

const style = {
  inputStyle: {
    color: '#000',
    lineHeight: 23,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 2,
    fontSize: 18
  },
  labelStyle: {
    paddingLeft: 20,
    flex: 1,
    fontSize: 18
  },
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    borderRadius: 25,
    backgroundColor: '#fbf8e5',
    height: 50

  }

};

export { Input };
