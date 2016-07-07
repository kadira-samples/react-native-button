import { AppRegistry } from 'react-native';
import * as storybook from '@kadira/react-native-storybook';
import addTextButton from './addons/add-text-button';

// add global addons
storybook.setAddon({
  addTextButton,
});

// import your stories
storybook.configure(function () {
  require('./stories/Button');
}, module);

const StorybookUI = storybook.getStorybookUI({port: 9001, host: 'localhost'});
AppRegistry.registerComponent('ReactNativeButton', () => StorybookUI);
