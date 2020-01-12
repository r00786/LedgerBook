
import React from 'react';
import { View } from 'react-native';

const Cardsection = (obj) => (
    <View style={[style.containerStyle, obj.style]}>
{obj.children}
    </View>
  );

  const style = {
    containerStyle: {
      borderBottomwidth: 0,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderRadius: 2,
      marginTop: 20,
      position: 'relative'

    }
  };


  export { Cardsection };
