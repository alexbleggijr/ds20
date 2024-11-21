import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { Easing } from '../../../enums/easing.enums';
import { execute } from './execute';
import { IScale } from './interface';

const meta: Meta<IScale> = {
  title: 'base/scale/scale',
  argTypes: {
    start: {
      control: { type: 'number' },
      description: 'Define a escala inicial da animação.',
      table: {
        defaultValue: { summary: 'undefined' },
        type: { summary: 'number' },
      },
    },
    end: {
      control: { type: 'number' },
      description: 'Define a escala final da animação.',
      table: {
        defaultValue: { summary: 'undefined' },
        type: { summary: 'number' },
      },
    },
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
    start: 0.3,
    end: 1,
    duration: 1000,
  },
};

export default meta;

type Story = StoryObj<IScale>;

export const Default: Story = {
  render: ({ ...args }) => {
    execute(args, 'animated-element-scale');

    return html`
      <button id="animated-element-scale">Elemento animado.</button>
    `;
  },
};
