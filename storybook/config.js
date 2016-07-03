import React from 'react';
import { Text, View } from 'react-native';
import { setAddon, configure } from '@kadira/react-native-storybook';
import Button from '../components/Button';

setAddon({
  addTextButton(story, text) {
    this.add(story, () => <Button><View><Text>{text}</Text></View></Button> );
  }
});

configure(function () {
  require('./stories/Button');
}, module);
