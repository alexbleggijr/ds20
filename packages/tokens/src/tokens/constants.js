const dist =
  process.env.NODE_ENV === 'development' ? './dist' : '../../dist/tokens';

export const PATHS = {
  figma: {
    globalBase: 'src/figma/global-base',
    brands: 'src/figma/brands',
  },
  dist: dist,
};
