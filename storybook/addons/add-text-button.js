import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';

export default function addTextButton(story, text) {
  this.add(story, function () {
    return <Button><View><Text>{text}</Text></View></Button>;
  });
}
