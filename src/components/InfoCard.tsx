import React, {ReactElement, ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

interface InfoCardProps {
  to: string;
  title: string;
  description: string;
  icon?: ReactNode; // Thay đổi từ string (đã comment) sang ReactNode
}

export default function InfoCard({to, title, description, icon}: InfoCardProps): ReactElement { // Thay đổi JSX.Element thành ReactElement
  return (
    <Link to={to} className="info-card">
      {icon && <div className="info-card-icon">{icon}</div>} {/* Thêm để hiển thị icon */}
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </Link>
  );
}
