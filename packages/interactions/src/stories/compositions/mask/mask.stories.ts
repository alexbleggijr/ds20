import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { Easing } from '../../../enums/easing.enums';
import { execute } from './execute';
import { IMask } from './interface';

const meta: Meta<IMask> = {
  title: 'base/compositions/mask',
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

type Story = StoryObj<IMask>;

export const Default: Story = {
  render: ({ ...args }) => {
    execute(args, 'animated-element-mask');

    return html`
      <div class="tp-mask-container">
        <button class="tp-mask-item-to-top" id="animated-element-mask">
          Elemento animado.
        </button>
      </div>
    `;
  },
};
