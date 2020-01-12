import React from 'react';
import { View } from 'react-native';

const Card = (obj) => (
    <View style={style.viewStyle} >
    {obj.children}
    </View>
  );

const style = {
  viewStyle: {
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
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10


  }
};

export { Card };
