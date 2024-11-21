import { Animations } from '../../../animations';
import { Easing } from '../../../enums/easing.enums';
import { IScale } from './interface';

export function execute(args: IScale, animatedElementId: string) {
  window.addEventListener('DOMContentLoaded', () => {
    const animatedElement = document.querySelector(
      `#${animatedElementId}`,
    ) as HTMLElement;

    if (args.easing) {
      Animations.scale(animatedElement, args.start, args.end)
        .duration(args.duration)
        .easing(Easing[args.easing])
        .play();

      return;
    }

    Animations.scale(animatedElement, args.start, args.end)
      .duration(args.duration)
      .play();
  });
}
