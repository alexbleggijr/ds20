import { createAnimation } from '@ionic/core';

export namespace FadeAnimations {
  export function fadeIn(
    elements: Element | Element[] | Node | Node[] | NodeList,
  ) {
    return createAnimation()
      .addElement(elements)
      .keyframes([
        { offset: 0, opacity: '0' },
        { offset: 1, opacity: '1' },
      ]);
  }

  export function fadeOut(
    elements: Element | Element[] | Node | Node[] | NodeList,
  ) {
    return createAnimation()
      .addElement(elements)
      .keyframes([
        { offset: 0, opacity: '1' },
        { offset: 1, opacity: '0' },
      ]);
  }
}
