import { Easing } from '../../../enums/easing.enums';

export interface IFadeOut {
  duration: number;
  easing?: keyof typeof Easing;
}
