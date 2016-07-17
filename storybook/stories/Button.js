import React from 'react';
import { Text, View } from 'react-native';
import { storiesOf, action, linkTo } from '@kadira/react-native-storybook';
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

stories.add('with a link', () => (
  <Button onPress={linkTo('Button', 'link target')}>
    <View><Text>Next Story</Text></View>
  </Button>
));

stories.add('link target', () => (
  <Button onPress={action('clicked')}>
    <View><Text>Hello World</Text></View>
  </Button>
));

stories.addTextButton('using addon', 'With Addon');
