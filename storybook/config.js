import React from 'react';
import { Text } from 'react-native';
import { setAddon, configure } from '@kadira/react-native-storybook';
import Button from '../components/Button';

setAddon({
  addTextButton(story, text) {
    this.add(story, () => <Button><Text>{text}</Text></Button> );
  }
});

configure(function () {
  require('./stories/Button');
}, module);
