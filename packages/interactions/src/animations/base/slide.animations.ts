import { createAnimation } from '@ionic/core';
import { Units } from '../../enums/units.enums';

export namespace SlideAnimations {
  export function slideX(
    elements: Element | Element[] | Node | Node[] | NodeList,
    start: number,
    startUnit: Units,
    end: number,
    endUnit: Units,
  ) {
    return createAnimation()
      .addElement(elements)
      .keyframes([
        { offset: 0, transform: `translateX(${start}${startUnit})` },
        {
          offset: 1,
          transform: `translateX(${end}${endUnit})`,
        },
      ]);
  }

  export function slideY(
    elements: Element | Element[] | Node | Node[] | NodeList,
    start: number,
    startUnit: Units,
    end: number,
    endUnit: Units,
  ) {
    return createAnimation()
      .addElement(elements)
      .keyframes([
        { offset: 0, transform: `translateY(${start}${startUnit})` },
        {
          offset: 1,
          transform: `translateY(${end}${endUnit})`,
        },
      ]);
  }

  export function slideXY(
    elements: Element | Element[] | Node | Node[] | NodeList,
    startX: number,
    startXUnit: Units,
    endX: number,
    endXUnit: Units,
    startY: number,
    startYUnit: Units,
    endY: number,
    endYUnit: Units,
  ) {
    return createAnimation()
      .addElement(elements)
      .keyframes([
        {
          offset: 0,
          transform: `translateX(${startX}${startXUnit}) translateY(${startY}${startYUnit})`,
        },
        {
          offset: 1,
          transform: `translateX(${endX}${endXUnit}) translateY(${endY}${endYUnit})`,
        },
      ]);
  }
}
