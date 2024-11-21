import { createAnimation } from '@ionic/core';

export namespace ScaleAnimations {
  export function scale(
    elements: Element | Element[] | Node | Node[] | NodeList,
    start: number,
    end: number,
  ) {
    return createAnimation()
      .addElement(elements)
      .keyframes([
        { offset: 0, transform: `scale(${start})` },
        { offset: 1, transform: `scale(${end})` },
      ]);
  }

  export function pulse(
    elements: Element | Element[] | Node | Node[] | NodeList,
    firstPeak: number,
    secondPeak: number,
    firstPeakOffset = 0.25,
    secondPeakOffset = 0.75,
  ) {
    return createAnimation()
      .addElement(elements)
      .keyframes([
        { offset: 0, transform: `scale(1)` },
        { offset: firstPeakOffset, transform: `scale(${firstPeak})` },
        { offset: secondPeakOffset, transform: `scale(${secondPeak})` },
        { offset: 1, transform: `scale(1)` },
      ]);
  }
}
