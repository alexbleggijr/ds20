import { Animations } from '../../../animations';
import { Easing } from '../../../enums/easing.enums';
import { IPulse } from './interface';

export function execute(args: IPulse, animatedElementId: string) {
  window.addEventListener('DOMContentLoaded', () => {
    const animatedElement = document.querySelector(
      `#${animatedElementId}`,
    ) as HTMLElement;

    if (args.easing) {
      Animations.pulse(
        animatedElement,
        args.firstPeak,
        args.secondPeak,
        args.firstPeakOffset,
        args.secondPeakOffset,
      )
        .duration(args.duration)
        .easing(Easing[args.easing])
        .play();

      return;
    }

    Animations.pulse(
      animatedElement,
      args.firstPeak,
      args.secondPeak,
      args.firstPeakOffset,
      args.secondPeakOffset,
    )
      .duration(args.duration)
      .play();
  });
}
