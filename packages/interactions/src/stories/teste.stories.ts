import { Components } from '@ionic/core';
import { defineCustomElement as defineCustomElementButton } from '@ionic/core/components/ion-button';
import { defineCustomElement as defineCustomElementIcon } from '@ionic/core/components/ion-icon';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

defineCustomElementButton();
defineCustomElementIcon();

const meta: Meta<any> = {
  title: 'teste',
};

export default meta;

type Story = StoryObj<any>;

export const Default: Story = {
  render: ({ ...args }) => html` <button>abc</button> `,
};
