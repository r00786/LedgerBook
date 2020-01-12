import React from 'react';
import { View, ActivityIndicator } from 'react-native';


const Loader = ({ size }) => {
return (<View>
    <ActivityIndicator size={size || 'large'} />
    </View>);
  };

export { Loader };
