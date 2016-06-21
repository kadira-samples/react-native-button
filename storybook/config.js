import { configure } from '@kadira/react-native-storybook';

configure(function () {
  require('./stories/CenteredText');
  require('./stories/SmallCenteredText');
}, module);
