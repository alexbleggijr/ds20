import { Animations } from '../../../animations';
import { Easing } from '../../../enums/easing.enums';
import { IslideY } from './interface';

export function execute(args: IslideY, animatedElementId: string) {
  window.addEventListener('DOMContentLoaded', () => {
    const animatedElement = document.querySelector(
      `#${animatedElementId}`,
    ) as HTMLElement;

    if (args.easing) {
      Animations.slideY(
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

    Animations.slideY(
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
