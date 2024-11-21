import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementButton } from '@ionic/core/components/ion-button';
import { defineCustomElement as defineCustomElementIcon } from '@ionic/core/components/ion-icon';
import { withThemeByClassName } from '@storybook/addon-themes';
import type { Meta, StoryObj } from '@storybook/web-components';
import { THEMES } from '@templarios/tokens/src/utilities/figma.js';
import { html } from 'lit';
import { TpIonButton } from './utilities/button.type';
import { TP_ION_BUTTON } from './utilities/button.constant';

defineCustomElementButton();
defineCustomElementIcon();

const meta: Meta<Components.IonButton & TpIonButton> = {
  title: 'MEDMe/Button',
  argTypes: {
    'tp-color': {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Define a cor secundária do componente.',
      table: {
        defaultValue: { summary: 'undefined' },
        type: { summary: 'secondary' },
      },
    },
    size: {
      control: { type: 'select' },
      options: [...TP_ION_BUTTON.size],
      description: 'Define o tamanho do componente.',
      table: {
        defaultValue: { summary: 'undefined' },
        type: { summary: 'sm' },
      },
    },
    fill: {
      control: { type: 'select' },
      options: ['solid', 'bordered'],
      description: 'Define a cor de fundo e borda do componente.',
      table: {
        defaultValue: { summary: 'undefined' },
        type: { summary: 'bordered' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Define a estilização do estado disabled do componente.',
      table: {
        defaultValue: { summary: 'undefined' },
        type: { summary: 'boolean' },
      },
    },
  },
  decorators: [
    withThemeByClassName<any>({
      themes: {
        ...THEMES.medme,
      },
      defaultTheme: 'Default · Dark · Screen lg',
    }),
  ],
};

export default meta;

type Story = StoryObj<Components.IonButton>;

export const Default: Story = {
  render: ({ ...args }) => html`
    <ion-button
      tp-color="${args['tp-color']}"
      fill="${args.fill}"
      size="${args.size}"
      ?disabled="${args.disabled}"
    >
      ion-button
    </ion-button>
  `,
};
