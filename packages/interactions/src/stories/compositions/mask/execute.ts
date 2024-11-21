import { Animations } from '../../../animations';
import { Easing } from '../../../enums/easing.enums';
import { IMask } from './interface';

export function execute(args: IMask, animatedElementId: string) {
  window.addEventListener('DOMContentLoaded', () => {
    const animatedElement = document.querySelector(
      `#${animatedElementId}`,
    ) as HTMLElement;

    if (args.easing) {
      Animations.mask(animatedElement)
        .duration(args.duration)
        .easing(Easing[args.easing])
        .delay(1000)
        .play();

      return;
    }

    Animations.mask(animatedElement).duration(args.duration).play();
  });
}
