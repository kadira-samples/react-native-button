import * as storybook from '@kadira/react-native-storybook';

storybook.configureUI({
  channel: {
    type: 'firebase',
    options: {
      baseUrl: 'https://kadira-storybooks.firebaseio.com/',
      readRef: '/43f7f11a-e0fe-47f2-ba09-2c152785b342/browser',
      writeRef: '/43f7f11a-e0fe-47f2-ba09-2c152785b342/device'
    }
  },
  preview: {
    appetize: {
      android: 'phd1gpp2a2d260a4r3pxvujukw',
    },
  }
});

require('./_index');
