import { compose } from 'styled-system';
import { resolveAliases, transformScaleOrPercentRem } from './utils';

export const propsNew = {
  roundedTop: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    scale: 'radii',
  },
  roundedBottom: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    scale: 'radii',
  },
  roundedLeft: {
    properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    scale: 'radii',
  },
  roundedRight: {
    properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
    scale: 'radii',
  },
  roundedTopRight: {
    property: 'borderTopRightRadius',
    scale: 'radii',
  },
  roundedTopLeft: {
    property: 'borderTopLeftRadius',
    scale: 'radii',
  },
  roundedBottomRight: {
    property: 'borderBottomRightRadius',
    scale: 'radii',
  },
  roundedBottomLeft: {
    property: 'borderBottomLeftRadius',
    scale: 'radii',
  },
  rounded: {
    property: 'borderRadius',
    scale: 'radii',
  },
  width: {
    property: 'width',
    scale: 'sizes',
    transform: transformScaleOrPercentRem,
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes',
    transform: transformScaleOrPercentRem,
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes',
    transform: transformScaleOrPercentRem,
  },
  height: {
    property: 'height',
    scale: 'sizes',
    transform: transformScaleOrPercentRem,
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes',
    transform: transformScaleOrPercentRem,
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes',
    transform: transformScaleOrPercentRem,
  },
  shadow: {
    property: 'boxShadow',
    scale: 'shadows',
  },
  textDecoration: true,
  overflowX: true,
  overflowY: true,
  textTransform: true,
  animation: true,
  appearance: true,
  transform: true,
  transformOrigin: true,
  visibility: true,
  whiteSpace: true,
  userSelect: true,
  pointerEvents: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  boxSizing: true,
  cursor: true,
  resize: true,
  transition: true,
  listStyleType: true,
  listStylePosition: true,
  listStyleImage: true,
  fill: {
    property: 'fill',
    scale: 'colors',
  },
  stroke: {
    property: 'stroke',
    scale: 'colors',
  },
  objectFit: true,
  objectPosition: true,
  backgroundAttachment: true,
  outline: true,
  float: true,
  willChange: true,
  gradient: {
    property: 'background-image',
    scale: 'colors',
    transform: (val, scale) => scale.grads[val],
  },
  gridTemplateColumns: {
    property: 'grid-template-columns',
    scale: 'grids',
  },
};

const propsAlias = {
  grad: 'gradient',
  bgImg: 'backgroundImage',
  bgSize: 'backgroundSize',
  bgAttach: 'backgroundAttachment',
  bgAttachment: 'backgroundAttachment',
  bgPos: 'backgroundPosition',
  bgRepeat: 'backgroundRepeat',
  backgroundImg: 'backgroundImage',
  backgroundAttach: 'backgroundAttachment',
  backgroundPos: 'backgroundPosition',
  textDecor: 'textDecoration',
  listStylePos: 'listStylePosition',
  listStyleImg: 'listStyleImage',
  d: 'display',
  pos: 'position',
  flexDir: 'flexDirection',
  g: 'gridTemplateColumns',
  gc: 'gridTemplateColumns',
  gr: 'gridTemplateRows',
};

export default compose({ ...propsNew, ...resolveAliases(propsNew, propsAlias) });
