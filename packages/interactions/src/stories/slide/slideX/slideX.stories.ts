import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { Easing } from '../../../enums/easing.enums';
import { Units } from '../../../enums/units.enums';
import { execute } from './execute';
import { IslideX } from './interface';

const meta: Meta<IslideX> = {
  title: 'base/slide/slideX',
  argTypes: {
    start: {
      control: { type: 'number' },
      description: 'Define a posição inicial do elemento animado.',
      table: {
        defaultValue: { summary: 'undefined' },
        type: { summary: 'number' },
      },
    },
    startUnit: {
      control: { type: 'select' },
      options: Object.values(Units),
      description:
        'Define a unidade relativa à posição inicial do elemento animado.',
      table: {
        defaultValue: { summary: 'px' },
        type: { summary: Object.values(Units).join(' | ') },
      },
    },
    end: {
      control: { type: 'number' },
      description: 'Define a posição final do elemento animado.',
      table: {
        defaultValue: { summary: 'undefined' },
        type: { summary: 'number' },
      },
    },
    endUnit: {
      control: { type: 'select' },
      options: Object.values(Units),
      description:
        'Define a unidade relativa à posição final do elemento animado.',
      table: {
        defaultValue: { summary: 'px' },
        type: { summary: Object.values(Units).join(' | ') },
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
    start: 0,
    startUnit: Units.PX,
    end: 100,
    endUnit: Units.PX,
    duration: 1000,
  },
};

export default meta;

type Story = StoryObj<IslideX>;

export const Default: Story = {
  render: ({ ...args }) => {
    execute(args, 'animated-element-slide-x');

    return html`
      <button id="animated-element-slide-x">Elemento animado.</button>
    `;
  },
};
