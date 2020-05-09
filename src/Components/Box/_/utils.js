import { get } from 'styled-system';

/**
 * @param config
 * @param aliasName
 * @param aliasTo
 */
export const resolveAlias = (config, aliasName, aliasTo) => {
  if (!(aliasTo in config) || config[aliasTo] === true) {
    return { [aliasName]: { [(Array.isArray(aliasTo) ? 'properties' : 'property')]: aliasTo } };
  }
  return config[aliasTo];
};

/**
 * @param config
 * @param aliases
 */
export const resolveAliases = (config, aliases) => Object.keys(aliases)
  .reduce((obj, aliasFrom) => ({ ...obj, [aliasFrom]: resolveAlias(config, aliasFrom, aliases[aliasFrom]) }), {});

/**
 * @param n
 */
export const isNumber = (n) => typeof n === 'number' && !Math.isNaN(n);

/**
 * @param unit
 */
export const transformPercentOrUnit = (unit) => (n) => ((!isNumber(n) || n > 1) ? `${n}${unit}` : `${n * 100}%`);

/**
 * @param custom
 */
export const transformScaleOrCustom = (custom) => (n, scale) => get(scale, n, custom);

/**
 *
 */
export const transformScaleOrPercentRem = transformScaleOrCustom(transformPercentOrUnit('rem'));

/**
 * @param parser
 * @param style
 */
export const parseCustomStyle = (parser, style) => {
  // TODO(@tylermenezes) parser(props) but recurse if object
};
