import styled from '@emotion/styled';
import { compose, system } from 'styled-system';
import css from '@styled-system/css';
import { createShouldForwardProp } from '@styled-system/should-forward-prop';
import styledProps from './_/styled-props';
import htmlProps from './_/html-props';

// https://github.com/chakra-ui/chakra-ui/blob/master/packages/chakra-ui/src/Box/index.js


export default (additionalStyledProps) => {
  const allProps = compose(styledProps, system(additionalStyledProps || {}));
  const shouldForwardProp = createShouldForwardProp(allProps);

  const Box = styled('div', {
    shouldForwardProp: (prop) => htmlProps.includes(prop) || shouldForwardProp(prop);
  })(system);
  // TODO(@tylermenezes): Figure out how to parse additional props here
};
