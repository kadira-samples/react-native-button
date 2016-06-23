import React from 'react';
import { Text } from 'react-native';
import style from './style';

export default function LargeText(props) {
  return (
    <Text style={style.main}>
      {props.children}
    </Text>
  );
}
