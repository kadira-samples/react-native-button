import React from 'react';
import CenteredText from '../components/CenteredText';
import { setAddon, configure } from '@kadira/react-native-storybook';

setAddon({
  addCenteredText(story, text) {
    this.add(story, () => <CenteredText>{text}</CenteredText> );
  }
});

configure(function () {
  require('./stories/CenteredText');
  require('./stories/SmallCenteredText');
  require('./stories/UsingAddons');
}, module);
