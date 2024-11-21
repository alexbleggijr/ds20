import type { Preview } from '@storybook/web-components';

// ionic
import { initialize } from '@ionic/core/components';
import { defineCustomElement as defineCustomElementIonIcon } from 'ionicons/components/ion-icon';

import '@ionic/core/css/core.css';
import '@ionic/core/css/display.css';
import '@ionic/core/css/flex-utils.css';
import '@ionic/core/css/float-elements.css';
import '@ionic/core/css/normalize.css';
import '@ionic/core/css/padding.css';
import '@ionic/core/css/structure.css';
import '@ionic/core/css/text-alignment.css';
import '@ionic/core/css/text-transformation.css';
import '@ionic/core/css/typography.css';

initialize();
defineCustomElementIonIcon();

// tokens
import '@templarios/tokens/dist/css/global.min.css';

import '@templarios/tokens/dist/css/medme/base.min.css';

import '@templarios/tokens/dist/css/medme/themes/default/breakpoints/screen-lg.min.css';
import '@templarios/tokens/dist/css/medme/themes/default/breakpoints/screen-md.min.css';
import '@templarios/tokens/dist/css/medme/themes/default/breakpoints/screen-sm.min.css';
import '@templarios/tokens/dist/css/medme/themes/default/components/components.min.css';
import '@templarios/tokens/dist/css/medme/themes/default/schemes/dark.min.css';
import '@templarios/tokens/dist/css/medme/themes/default/schemes/light.min.css';

import '@templarios/tokens/dist/css/medme/themes/billy/breakpoints/screen-lg.min.css';
import '@templarios/tokens/dist/css/medme/themes/billy/breakpoints/screen-md.min.css';
import '@templarios/tokens/dist/css/medme/themes/billy/breakpoints/screen-sm.min.css';
import '@templarios/tokens/dist/css/medme/themes/billy/components/components.min.css';
import '@templarios/tokens/dist/css/medme/themes/billy/schemes/dark.min.css';
import '@templarios/tokens/dist/css/medme/themes/billy/schemes/light.min.css';

import './assets/storybook.css';

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    staticDirs: ['../src'],
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
