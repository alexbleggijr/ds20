import { Easing } from '../../enums/easing.enums';

export interface IChain {
  stagger?: number;
  limitStagger?: boolean;
  limitCount?: number;
  duration: number;
  easing?: keyof typeof Easing;
}
