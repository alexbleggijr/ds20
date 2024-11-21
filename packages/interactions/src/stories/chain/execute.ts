import { Animations } from '../../animations';
import { Easing } from '../../enums/easing.enums';
import { Units } from '../../enums/units.enums';
import { IChain } from './interface';

export function execute(args: IChain, animatedElementsClass: string) {
  window.addEventListener('DOMContentLoaded', () => {
    const animatedElements = [
      ...document.querySelectorAll(`.${animatedElementsClass}`),
    ];

    const animations = animatedElements.map((element) =>
      Animations.slideY(element, 100, Units.PX, 0, Units.PX),
    );

    if (args.easing) {
      Animations.chain(
        animations,
        args.stagger ?? 0,
        args.limitStagger ?? false,
        args.limitCount ?? 0,
      )
        .duration(args.duration)
        .easing(Easing[args.easing])
        .play();

      return;
    }

    Animations.chain(
      animations,
      args.stagger ?? 0,
      args.limitStagger ?? false,
      args.limitCount ?? 0,
    )
      .duration(args.duration)
      .play();
  });
}
