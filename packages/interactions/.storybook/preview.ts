import type { Preview } from '@storybook/web-components';

import '../src/index.ts';
import '../src/styles/main.scss';

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
