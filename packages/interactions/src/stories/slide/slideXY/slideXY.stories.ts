import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { Units } from '../../../enums/units.enums';
import { execute } from './execute';
import { IslideXY } from './interface';
import { Easing } from '../../../enums/easing.enums';

const meta: Meta<IslideXY> = {
  title: 'base/slide/slideXY',
  argTypes: {
    startX: {
      control: { type: 'number' },
      description: 'Define a posição inicial do elemento animado.',
      table: {
        defaultValue: { summary: 'undefined' },
        type: { summary: 'number' },
      },
    },
    startXUnit: {
      control: { type: 'select' },
      options: Object.values(Units),
      description:
        'Define a unidade relativa à posição inicial do elemento animado.',
      table: {
        defaultValue: { summary: 'px' },
        type: { summary: Object.values(Units).join(' | ') },
      },
    },
    endX: {
      control: { type: 'number' },
      description: 'Define a posição final do elemento animado.',
      table: {
        defaultValue: { summary: 'undefined' },
        type: { summary: 'number' },
      },
    },
    endXUnit: {
      control: { type: 'select' },
      options: Object.values(Units),
      description:
        'Define a unidade relativa à posição final do elemento animado.',
      table: {
        defaultValue: { summary: 'px' },
        type: { summary: Object.values(Units).join(' | ') },
      },
    },
    startY: {
      control: { type: 'number' },
      description: 'Define a posição inicial do elemento animado.',
      table: {
        defaultValue: { summary: 'undefined' },
        type: { summary: 'number' },
      },
    },
    startYUnit: {
      control: { type: 'select' },
      options: Object.values(Units),
      description:
        'Define a unidade relativa à posição inicial do elemento animado.',
      table: {
        defaultValue: { summary: 'px' },
        type: { summary: Object.values(Units).join(' | ') },
      },
    },
    endY: {
      control: { type: 'number' },
      description: 'Define a posição final do elemento animado.',
      table: {
        defaultValue: { summary: 'undefined' },
        type: { summary: 'number' },
      },
    },
    endYUnit: {
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
    startX: 0,
    startXUnit: Units.PX,
    endX: 100,
    endXUnit: Units.PX,
    startY: 0,
    startYUnit: Units.PX,
    endY: 100,
    endYUnit: Units.PX,
    duration: 1000,
  },
};

export default meta;

type Story = StoryObj<IslideXY>;

export const Default: Story = {
  render: ({ ...args }) => {
    execute(args, 'animated-element-slide-xy');

    return html`
      <button id="animated-element-slide-xy">Elemento animado.</button>
    `;
  },
};
