import { Easing } from '../../../enums/easing.enums';

export interface IScale {
  start: number;
  end: number;
  duration: number;
  easing?: keyof typeof Easing;
}
