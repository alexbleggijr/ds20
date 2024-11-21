import { Animations } from '../../../animations';
import { Easing } from '../../../enums/easing.enums';
import { IslideX } from './interface';

export function execute(args: IslideX, animatedElementId: string) {
  window.addEventListener('DOMContentLoaded', () => {
    const animatedElement = document.querySelector(
      `#${animatedElementId}`,
    ) as HTMLElement;

    if (args.easing) {
      Animations.slideX(
        animatedElement,
        args.start,
        args.startUnit,
        args.end,
        args.endUnit,
      )
        .duration(args.duration)
        .easing(Easing[args.easing])
        .play();

      return;
    }

    Animations.slideX(
      animatedElement,
      args.start,
      args.startUnit,
      args.end,
      args.endUnit,
    )
      .duration(args.duration)
      .play();
  });
}
