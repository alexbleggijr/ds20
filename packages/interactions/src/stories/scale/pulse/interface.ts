import { Easing } from '../../../enums/easing.enums';

export interface IPulse {
  firstPeak: number;
  secondPeak: number;
  firstPeakOffset: number;
  secondPeakOffset: number;
  duration: number;
  easing?: keyof typeof Easing;
}
