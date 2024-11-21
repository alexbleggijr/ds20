import { Animations } from '../../../animations';
import { Easing } from '../../../enums/easing.enums';
import { IslideXY } from './interface';

export function execute(args: IslideXY, animatedElementId: string) {
  window.addEventListener('DOMContentLoaded', () => {
    const animatedElement = document.querySelector(
      `#${animatedElementId}`,
    ) as HTMLElement;

    if (args.easing) {
      Animations.slideXY(
        animatedElement,
        args.startX,
        args.startXUnit,
        args.endX,
        args.endXUnit,
        args.startY,
        args.startYUnit,
        args.endY,
        args.endYUnit,
      )
        .duration(args.duration)
        .easing(Easing[args.easing])
        .play();

      return;
    }

    Animations.slideXY(
      animatedElement,
      args.startX,
      args.startXUnit,
      args.endX,
      args.endXUnit,
      args.startY,
      args.startYUnit,
      args.endY,
      args.endYUnit,
    )
      .duration(args.duration)
      .play();
  });
}
