import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@kadira/react-native-storybook';
import Button from '../../components/Button';

const stories = storiesOf('Button');

stories.add('default view', () => (
  <Button>
    <Text>Hello World</Text>
  </Button>
));

stories.addTextButton('using addon', 'With Addon');
