import React, { Component } from 'react';
import { storiesOf } from '@kadira/react-native-storybook';
import CenteredText from '../../components/CenteredText';

const stories = storiesOf('CenteredText');

stories.add('First Story', () => (
  <CenteredText>First Story</CenteredText>
));

stories.add('Second Story', () => (
  <CenteredText>Second Story</CenteredText>
));

stories.add('Third Story', () => (
  <CenteredText>Third Story</CenteredText>
));

stories.add('Fourth Story', () => (
  <CenteredText>Fourth Story</CenteredText>
));
