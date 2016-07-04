import React from 'react';
import { Text, View } from 'react-native';
import { storiesOf, action } from '@kadira/react-native-storybook';
import CenterView from '../../components/CenterView';
import Button from '../../components/Button';

const stories = storiesOf('Button');

stories.addDecorator(story => (
  <CenterView>{story()}</CenterView>
));

stories.add('default view', () => (
  <Button onPress={action('clicked')}>
    <View><Text>Hello World</Text></View>
  </Button>
));

stories.addTextButton('using addon', 'With Addon');
