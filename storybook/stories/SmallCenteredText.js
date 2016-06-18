import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';
import SmallCenteredText from '../../components/SmallCenteredText';

const stories = storiesOf('SmallCenteredText');

stories.add('First Story', () => (
  <SmallCenteredText>First Story</SmallCenteredText>
));

stories.add('Second Story', () => (
  <SmallCenteredText>Second Story</SmallCenteredText>
));
