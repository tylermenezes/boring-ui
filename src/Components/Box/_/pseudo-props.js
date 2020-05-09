const pseudoPrefix = 'pseudo';

const pseudoSelectors = {
  hover: '&:hover',
  active: '&:active, &[data-active=true]',
  focus: '&:focus',
  visited: '&:visited',
  even: '&:nth-child(even)',
  odd: '&:nth-child(odd)',
  first: '&:first-child',
  last: '&:last-child',
  evenType: '&:nth-of-type(even)',
  oddType: '&:nth-of-type(odd)',
  firstOfType: '&:first-of-type',
  lastOfType: '&:last-of-type',
  disabled: ['&:disabled', '&[aria-disabled]'].map((e) => `${e}, ${e}:focus, ${e}:hover`).join(', '),
  checked: '&[aria-checked=true]',
  mixed: '&[aria-checked=mixed]',
  selected: '&[aria-selected=true]',
  invalid: '&[aria-invalid=true]',
  pressed: '&[aria-pressed=true]',
  readOnly: '&[aria-readonly=true], &[readonly]',
  expanded: '&[aria-expanded=true]',
  grabbed: '&[aria-grabbed=true]',
  notFirst: '&:not(:first-of-type)',
  notLast: '&:not(:last-of-type)',
  groupHover: '[role=group]:hover &',
};

/**
 * Transforms the passed props into an array of CSS elements into pseudo-selectors.
 *
 * @param {object} props List of props. Those with names starting with pseudo will be transformed into pseudoselectors.
 * @param {Function} parser Parser object to lookup actual values.
 * @returns {object} CSS properties for Emotion.
 */
export default (props) => Object.keys(props)
  .filter((prop) => prop.startsWith(pseudoPrefix))
  .map((prop) => prop.substring(pseudoPrefix.length))
  .map((prop) => prop.charAt(0).toLowerCase() + prop.slice(1))
  .reduce((obj, prop) => ({
    ...obj,
    [pseudoSelectors[prop]]: props[prop],
  }), {});
