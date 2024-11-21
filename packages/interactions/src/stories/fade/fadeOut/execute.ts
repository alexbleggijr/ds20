import { Animations } from '../../../animations';
import { Easing } from '../../../enums/easing.enums';
import { IFadeOut } from './interface';

export function execute(args: IFadeOut, animatedElementId: string) {
  window.addEventListener('DOMContentLoaded', () => {
    const animatedElement = document.querySelector(
      `#${animatedElementId}`,
    ) as HTMLElement;

    if (args.easing) {
      Animations.fadeOut(animatedElement)
        .duration(args.duration)
        .easing(Easing[args.easing])
        .play();

      return;
    }

    Animations.fadeOut(animatedElement).duration(args.duration).play();
  });
}
