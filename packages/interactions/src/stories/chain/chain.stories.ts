import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { Easing } from '../../enums/easing.enums';
import { execute } from './execute';
import { IChain } from './interface';

const meta: Meta<IChain> = {
  title: 'base/chain',
  argTypes: {
    stagger: {
      control: { type: 'number' },
      description: 'Define o delay entre cada animação.',
      table: {
        defaultValue: { summary: 'undefined' },
        type: { summary: 'number' },
      },
    },
    limitStagger: {
      control: { type: 'boolean' },
      description:
        'Define se o delay entre animações é limitado a um certo número de animações.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    limitCount: {
      control: { type: 'range', min: 1, max: 6, step: 1 },
      description: 'Define quantas das animações terão stagger.',
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
    duration: 1000,
  },
};

export default meta;

type Story = StoryObj<IChain>;

export const Default: Story = {
  render: ({ ...args }) => {
    execute(args, 'animated-element-chain');

    return html`
      <button class="animated-element-chain">Elemento animado 1.</button>
      <button class="animated-element-chain">Elemento animado 2.</button>
      <button class="animated-element-chain">Elemento animado 3.</button>
      <button class="animated-element-chain">Elemento animado 4.</button>
      <button class="animated-element-chain">Elemento animado 5.</button>
      <button class="animated-element-chain">Elemento animado 6.</button>
    `;
  },
};
