import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Loader = () => (
      <View
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
        }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
)
export default Loader;