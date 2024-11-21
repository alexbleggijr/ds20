import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { Easing } from '../../../enums/easing.enums';
import { execute } from './execute';
import { IFadeOut } from './interface';

const meta: Meta<IFadeOut> = {
  title: 'base/fade/fadeOut',
  argTypes: {
    duration: {
      control: { type: 'number' },
      description: 'Define a duração da animação.',
      table: {
        defaultValue: { summary: 'undefined' },
        type: { summary: 'number' },
      },
    },
    easing: {
      control: { type: 'select' },
      options: Object.keys(Easing),
      description: 'Define a curva de transição da animação.',
      table: {
        defaultValue: { summary: 'undefined' },
        type: { summary: Object.keys(Easing).join(' | ') },
      },
    },
  },
  args: {
    duration: 1000,
  },
};

export default meta;

type Story = StoryObj<IFadeOut>;

export const Default: Story = {
  render: ({ ...args }) => {
    execute(args, 'animated-element-fade-out');

    return html`
      <button id="animated-element-fade-out">Elemento animado.</button>
    `;
  },
};
