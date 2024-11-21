import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { Easing } from '../../../enums/easing.enums';
import { execute } from './execute';
import { IFadeIn } from './interface';

const meta: Meta<IFadeIn> = {
  title: 'base/fade/fadeIn',
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

type Story = StoryObj<IFadeIn>;

export const Default: Story = {
  render: ({ ...args }) => {
    execute(args, 'animated-element-fade-in');

    return html`
      <button id="animated-element-fade-in">Elemento animado.</button>
    `;
  },
};
