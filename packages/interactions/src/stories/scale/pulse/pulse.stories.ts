import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { Easing } from '../../../enums/easing.enums';
import { execute } from './execute';
import { IPulse } from './interface';

const meta: Meta<IPulse> = {
  title: 'base/scale/pulse',
  argTypes: {
    firstPeak: {
      control: { type: 'number' },
      description: 'Define um valor de escala da animação.',
      table: {
        defaultValue: { summary: 'undefined' },
        type: { summary: 'number' },
      },
    },
    secondPeak: {
      control: { type: 'number' },
      description: 'Define um valor de escala da animação.',
      table: {
        defaultValue: { summary: 'undefined' },
        type: { summary: 'number' },
      },
    },
    firstPeakOffset: {
      control: { type: 'number' },
      description:
        'Define a posição temporal na qual a animação vai atingir a escala definida por "firstPeak".',
      table: {
        defaultValue: { summary: 'undefined' },
        type: { summary: 'number' },
      },
    },
    secondPeakOffset: {
      control: { type: 'number' },
      description:
        'Define a posição temporal na qual a animação vai atingir a escala definida por "secondPeak".',
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
    firstPeak: 0.5,
    firstPeakOffset: 0.25,
    secondPeak: 1.25,
    secondPeakOffset: 0.75,
    duration: 1000,
  },
};

export default meta;

type Story = StoryObj<IPulse>;

export const Default: Story = {
  render: ({ ...args }) => {
    execute(args, 'animated-element-pulse');

    return html`
      <button id="animated-element-pulse">Elemento animado.</button>
    `;
  },
};
