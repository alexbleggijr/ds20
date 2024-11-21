import { Easing } from '../../../enums/easing.enums';

export interface IFadeIn {
  duration: number;
  easing?: keyof typeof Easing;
}
