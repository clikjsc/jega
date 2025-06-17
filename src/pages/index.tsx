import React, {ReactElement} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

// Define SVG Icon Components
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px" aria-hidden="true">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </svg>
);

const UserPlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px" aria-hidden="true">
    <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);

const DesignBuildIcon = () => ( // Layers icon
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px" aria-hidden="true">
    <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z"/>
  </svg>
);

const FurnitureIcon = () => ( // Generic Box/Cube
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px" aria-hidden="true">
    <path d="M5 4h14v10.5c0 .83-.67 1.5-1.5 1.5H6.5c-.83 0-1.5-.67-1.5-1.5V4zm15-2H4c-1.1 0-2 .9-2 2v12.5C2 17.88 3.12 19 4.5 19h15c1.38 0 2.5-1.12 2.5-2.5V4c0-1.1-.9-2-2-2zm-5 13.5h-4V14h4v1.5zm0-3h-4V11h4v1.5zm0-3h-4V8h4v1.5z"/>
  </svg>
);

const RenderAiIcon = () => ( // Image icon
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px" aria-hidden="true">
    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
  </svg>
);

const MaterialsIcon = () => ( // Palette icon
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px" aria-hidden="true">
    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
  </svg>
);

const DocumentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px" aria-hidden="true">
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px" aria-hidden="true">
    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
  </svg>
);


interface FeatureCardItem {
  title: string;
  description: string;
  link: string;
  IconComponent?: React.ComponentType;
}

const quickStartItems: FeatureCardItem[] = [
  {
    title: 'Giới thiệu JEGA',
    description: 'Tìm hiểu tổng quan về JEGA, các tính năng chính và lợi ích mà phần mềm mang lại.',
    link: '/docs/trung-tam-huong-dan/tong-quan/gioi-thieu',
    IconComponent: HomeIcon,
  },
  {
    title: 'Hướng dẫn cho người mới',
    description: 'Các bước đầu tiên để đăng ký, cài đặt và làm quen với giao diện JEGA.',
    link: '/docs/trung-tam-huong-dan/huong-dan-nguoi-dung-moi/dang-ky-tai-khoan',
    IconComponent: UserPlusIcon,
  },
];

const exploreFeaturesItems: FeatureCardItem[] = [
  {
    title: 'Thiết kế & Xây dựng',
    description: 'Học cách tạo mặt bằng, chỉnh sửa và dựng các cấu trúc xây dựng.',
    link: '/docs/trung-tam-huong-dan/thiet-ke-xay-dung/tao-mat-bang', // Points to the first item in the category
    IconComponent: DesignBuildIcon,
  },
  {
    title: 'Tuỳ chỉnh Nội thất',
    description: 'Khám phá thư viện nội thất phong phú và các công cụ tuỳ chỉnh chi tiết.',
    link: '/docs/trung-tam-huong-dan/tuy-chinh-noi-that/tu-do-noi-that', // Points to the first item in the category
    IconComponent: FurnitureIcon,
  },
  {
    title: 'Kết xuất', // Title changed
    description: 'Tạo hình ảnh render chất lượng cao và sử dụng công cụ AI để tạo bản vẽ.',
    link: '/docs/trung-tam-huong-dan/ket-xuat/thiet-lap-ket-xuat', // Points to the first item in the category
    IconComponent: RenderAiIcon,
  },
  {
    title: 'Vật liệu Thiết kế',
    description: 'Quản lý và áp dụng các loại vật liệu đa dạng cho thiết kế của bạn.',
    link: '/docs/trung-tam-huong-dan/tuy-chinh-noi-that/tuy-chinh-vat-lieu', // Points to the specific materials doc
    IconComponent: MaterialsIcon,
  },
  // Removed 'Báo giá & Bản vẽ' card as the linked directory is empty
  {
    title: 'Cập nhật hàng tháng',
    description: 'Xem các tính năng mới nhất được cập nhật trong JEGA.',
    link: '/docs/trung-tam-huong-dan/cap-nhat-hang-thang', // Points to the category overview
    IconComponent: CalendarIcon,
  },
];

function FeatureCard({title, description, link, IconComponent}: FeatureCardItem) {
  return (
    <Link to={link} className={styles.featureCard}>
      {IconComponent && <div className={styles.featureCardIcon}><IconComponent /></div>}
      <Heading as="h3" className={styles.featureCardTitle}>{title}</Heading>
      <p className={styles.featureCardDescription}>{description}</p>
    </Link>
  );
}

export default function Home(): ReactElement {
  const {siteConfig} = useDocusaurusContext();
  const videoId = 'J0h_Uzf6QNs'; // YouTube Video ID

  return (
    <Layout
      title={`Chào mừng đến với ${siteConfig.title}`}
      description="Khám phá tài liệu hướng dẫn toàn diện, các câu hỏi thường gặp và cập nhật mới nhất về phần mềm thiết kế nội thất AI JEGA.">
      <main className={styles.videoHomePageMain}>
        <div className={styles.videoPageContent}>
          <Heading as="h1" className={styles.videoPageTitle}>
            Chào mừng đến với Trung tâm Hỗ trợ JEGA
          </Heading>
          <p className={styles.videoPageSubtitle}>
            Khám phá tài liệu hướng dẫn toàn diện, các câu hỏi thường gặp và cập nhật mới nhất về phần mềm thiết kế nội thất AI JEGA.
          </p>
          <div className={styles.youtubeVideoContainer}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?controls=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className={styles.featuresSection}>
          <div className={styles.featuresContent}>
            <Heading as="h2" className={styles.sectionTitle}>
              Bắt đầu nhanh
            </Heading>
            <p className={styles.sectionSubtitle}>
              Làm quen với JEGA một cách nhanh chóng và hiệu quả.
            </p>
            <div className={styles.featureCardsContainer}>
              {quickStartItems.map((item, idx) => (
                <FeatureCard key={idx} {...item} />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.featuresSection}>
          <div className={styles.featuresContent}>
            <Heading as="h2" className={styles.sectionTitle}>
              Khám phá các tính năng
            </Heading>
            <p className={styles.sectionSubtitle}>
              Đi sâu vào các công cụ và tính năng mạnh mẽ của JEGA.
            </p>
            <div className={styles.featureCardsContainer}>
              {exploreFeaturesItems.map((item, idx) => (
                <FeatureCard key={idx} {...item} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
