import React from 'react';
import { Text, View } from 'react-native';
import CenterView from '../CenterView';
import LargeText from '../LargeText';
import SmallText from '../SmallText';
import Button from '../Button';

export default function ReactNativeButton(props) {
  return (
    <CenterView>
      <LargeText>Welcome to React Native!</LargeText>
      <SmallText>To get started, edit index.android.js</SmallText>
      <Button><View><Text>And the buttonn!</Text></View></Button>
    </CenterView>
  );
}
