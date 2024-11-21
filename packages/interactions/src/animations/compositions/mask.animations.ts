import { Animations } from '..';
import { SlideDirection } from '../../enums/slide-direction.enums';
import { Units } from '../../enums/units.enums';

export namespace MaskAnimations {
  export function mask(
    elements: Element | Element[] | Node | Node[] | NodeList,
    direction?: SlideDirection,
  ) {
    const OFFSET_ADJUSTMENT = 10;
    switch (direction) {
      case SlideDirection.TO_TOP:
        return Animations.slideY(
          elements,
          100 + OFFSET_ADJUSTMENT,
          Units.PERCENT,
          0,
          Units.PERCENT,
        );
      case SlideDirection.TO_BOTTOM:
        return Animations.slideY(
          elements,
          -100 - OFFSET_ADJUSTMENT,
          Units.PERCENT,
          0,
          Units.PERCENT,
        );
      case SlideDirection.TO_LEFT:
        return Animations.slideX(
          elements,
          100,
          Units.PERCENT,
          0,
          Units.PERCENT,
        );
      case SlideDirection.TO_RIGHT:
        return Animations.slideX(
          elements,
          -100,
          Units.PERCENT,
          0,
          Units.PERCENT,
        );
      default:
        return Animations.slideY(
          elements,
          100,
          Units.PERCENT,
          0,
          Units.PERCENT,
        );
    }
  }
}
