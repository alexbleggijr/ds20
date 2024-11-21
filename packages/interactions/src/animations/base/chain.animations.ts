import { Animation, createAnimation } from '@ionic/core';

export namespace ChainAnimations {
  export function chain(
    animations: Animation[],
    stagger = 0,
    limitStagger = false,
    limitCount = 0,
  ) {
    return createAnimation().addAnimation(
      stagger
        ? animations.map((animation, index) =>
            animation.delay(
              limitStagger
                ? Math.min(index * stagger, (limitCount - 1) * stagger)
                : index * stagger,
            ),
          )
        : animations,
    );
  }
}
