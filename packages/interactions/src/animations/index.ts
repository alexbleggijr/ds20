import { ChainAnimations } from './base/chain.animations';
import { FadeAnimations } from './base/fade.animations';
import { ScaleAnimations } from './base/scale.animations';
import { SlideAnimations } from './base/slide.animations';
import { MaskAnimations } from './compositions/mask.animations';

export namespace Animations {
  /**
   * Base
   */

  // Chain
  export const chain = ChainAnimations.chain;

  // Slide Animations
  export const slideX = SlideAnimations.slideX;
  export const slideY = SlideAnimations.slideY;
  export const slideXY = SlideAnimations.slideXY;

  // Fade Animations
  export const fadeIn = FadeAnimations.fadeIn;
  export const fadeOut = FadeAnimations.fadeOut;

  // Scale Animations
  export const scale = ScaleAnimations.scale;
  export const pulse = ScaleAnimations.pulse;

  /**
   * Compositions
   */

  // Mask Animations
  export const mask = MaskAnimations.mask;
}
