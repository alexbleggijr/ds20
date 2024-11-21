import { Easing } from '../../../enums/easing.enums';
import { Units } from '../../../enums/units.enums';

export interface IslideXY {
  startX: number;
  startXUnit: Units;
  endX: number;
  endXUnit: Units;
  startY: number;
  startYUnit: Units;
  endY: number;
  endYUnit: Units;
  duration: number;
  easing?: keyof typeof Easing;
}
