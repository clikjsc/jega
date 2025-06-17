import React from 'react';
import DocSidebarNavbarItem from '@theme-original/NavbarItem/DocSidebarNavbarItem';
import type { Props as DocSidebarNavbarItemProps } from '@theme/NavbarItem/DocSidebarNavbarItem';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const homepageOnlyItemsLabels = [
  'Trung tâm hướng dẫn', 
  // Add other labels if this component handles them and they are homepage-only
];

export default function DocSidebarNavbarItemWrapper(props: DocSidebarNavbarItemProps): React.JSX.Element | null {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();
  
  const normalizedBaseUrl = siteConfig.baseUrl === '/' ? '/' : (siteConfig.baseUrl.endsWith('/') ? siteConfig.baseUrl : `${siteConfig.baseUrl}/`);
  const isHomePage = location.pathname === normalizedBaseUrl || (location.pathname === '/' && normalizedBaseUrl === '/');

  // Check if the current item's label is one of those that should only be on the homepage
  // Ensure props.label is a string before using .includes()
  if (typeof props.label === 'string' && props.label && homepageOnlyItemsLabels.includes(props.label) && !isHomePage) {
    console.log(`[JEGA DocSidebarNavbarItem] Hiding: "${props.label}" on page ${location.pathname} (isHomePage: ${isHomePage})`);
    return null; // Don't render this item if it's homepage-only and we're not on the homepage
  }

  console.log(`[JEGA DocSidebarNavbarItem] Showing: "${props.label}" (isHomePage: ${isHomePage}, type: ${props.type}, sidebarId: ${props.sidebarId})`);
  return <DocSidebarNavbarItem {...props} />;
}
