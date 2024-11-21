import { Easing } from '../../../enums/easing.enums';
import { Units } from '../../../enums/units.enums';

export interface IslideX {
  start: number;
  startUnit: Units;
  end: number;
  endUnit: Units;
  duration: number;
  easing?: keyof typeof Easing;
}
