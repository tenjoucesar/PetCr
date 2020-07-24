import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const icon = ({icon, size = 38, backgroundColor, iconColor = '#fff'}) => (
  <View
    style={{
      width: size,
      height: size,
      borderRadius: size * 0.5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor,
    }}>
    <Icon name={icon} size={size * 0.5} color={iconColor} />
  </View>
);

export default icon;
