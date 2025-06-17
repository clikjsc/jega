import React from 'react';
import DefaultNavbarItem from '@theme-original/NavbarItem/DefaultNavbarItem';
import type { Props as DefaultNavbarItemProps } from '@theme/NavbarItem/DefaultNavbarItem';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const homepageOnlyItemsLabels = [
  // 'Trung tâm hướng dẫn', // This one is a docSidebar type
  'Online Training',
  'Jega Collection',
];

export default function DefaultNavbarItemWrapper(props: DefaultNavbarItemProps): React.JSX.Element | null {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();
  
  const normalizedBaseUrl = siteConfig.baseUrl === '/' ? '/' : (siteConfig.baseUrl.endsWith('/') ? siteConfig.baseUrl : `${siteConfig.baseUrl}/`);
  const isHomePage = location.pathname === normalizedBaseUrl || (location.pathname === '/' && normalizedBaseUrl === '/');

  // Check if the current item's label is one of those that should only be on the homepage
  if (typeof props.label === 'string' && props.label && homepageOnlyItemsLabels.includes(props.label) && !isHomePage) {
    console.log(`[JEGA DefaultNavbarItem] Hiding: "${props.label}" on page ${location.pathname} (isHomePage: ${isHomePage})`);
    return null; // Don't render this item if it's homepage-only and we're not on the homepage
  }

  console.log(`[JEGA DefaultNavbarItem] Showing: "${props.label}" (isHomePage: ${isHomePage}, type: ${props.type}, to: ${props.to}, href: ${props.href})`);
  return <DefaultNavbarItem {...props} />;
}
