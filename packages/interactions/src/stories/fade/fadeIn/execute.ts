import { Animations } from '../../../animations';
import { Easing } from '../../../enums/easing.enums';
import { IFadeIn } from './interface';

export function execute(args: IFadeIn, animatedElementId: string) {
  window.addEventListener('DOMContentLoaded', () => {
    const animatedElement = document.querySelector(
      `#${animatedElementId}`,
    ) as HTMLElement;

    if (args.easing) {
      Animations.fadeIn(animatedElement)
        .duration(args.duration)
        .easing(Easing[args.easing])
        .play();

      return;
    }

    Animations.fadeIn(animatedElement).duration(args.duration).play();
  });
}
