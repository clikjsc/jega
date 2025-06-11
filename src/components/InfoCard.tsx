import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

interface InfoCardProps {
  to: string;
  title: string;
  description: string;
  // icon?: string; // Có thể thêm icon sau
}

export default function InfoCard({to, title, description}: InfoCardProps): JSX.Element {
  return (
    <Link to={to} className="info-card">
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </Link>
  );
}
