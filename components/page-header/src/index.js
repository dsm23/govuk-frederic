import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { SPACING } from '@govuk-react/constants';
import { BLACK, WHITE } from 'govuk-colours';

const StyledPageHeader = styled('div')({
  width: '100%',
  color: WHITE,
  background: BLACK,
});

const InnerContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: SPACING.SCALE_5,
  paddingRight: SPACING.SCALE_5,
});

const LogoContainer = styled('div')({
  padding: SPACING.SCALE_2,
});

const NavigationContainer = styled('div')({
  paddingTop: SPACING.SCALE_3,
  paddingBottom: SPACING.SCALE_3,
});

/**
 *
 * ### Usage
 *
 * Default example
 * 
 * ```jsx
 * import PageHeader, { asLogoAnchor, asNavAnchor } from '@govuk-frederic/page-header';
 * 
 * const LogoLink = asLogoAnchor(Link);
 * const NavLink = asNavAnchor(Link);
 * const PageLogo = (<LogoLink to="/">Logo text</LogoLink>);
 * const PriorityNavigation = (<NavLink to="/">My Account</NavLink>);
 *
 * …
 *
 * <PageHeader logo={PageLogo}>
 *   {PriorityNavigation}
 * </PageHeader >
 * ```
 *
 * ### TODO:
 * - Add responsive considerations
 */
const PageHeader = ({ logo, children }) => (
  <StyledPageHeader>
    <InnerContainer>
      <LogoContainer>{ logo }</LogoContainer>
      <NavigationContainer>
        {children}
      </NavigationContainer>
    </InnerContainer>
  </StyledPageHeader>
);

PageHeader.propTypes = {
  logo: PropTypes.node,
  children: PropTypes.node,
};

PageHeader.defaultProps = {
  logo: null,
  children: null,
};

export default PageHeader;

export asLogoAnchor from './hoc/asLogoAnchor';
export asNavAnchor from './hoc/asNavAnchor';
