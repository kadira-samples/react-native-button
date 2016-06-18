import { AppRegistry } from 'react-native';
import { PreviewComponent } from '@kadira/react-native-storybook';
import './config';

AppRegistry.registerComponent('ReactNativeButton', function () {
  return PreviewComponent({port: 9001, host: 'localhost'});
});
