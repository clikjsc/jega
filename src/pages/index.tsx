import React, {ReactElement} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import InfoCard from '@site/src/components/InfoCard'; // Import InfoCard

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
      <div className="container">
        <Heading as="h1" className="hero__title" style={{fontSize: '2.5rem'}}>
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle" style={{fontSize: '1.2rem'}}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): ReactElement {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Trang Chủ - ${siteConfig.title}`}
      description="Trung tâm hỗ trợ và tài liệu hướng dẫn chính thức cho phần mềm JEGA Việt Nam. Tìm hiểu, khám phá và làm chủ JEGA.">
      <HomepageHeader />
      <main>
        <section className={styles.features} style={{padding: '2rem 0'}}>
          <div className="container">
            {/* YouTube Video */}
            <div className="youtube-video-container" style={{marginBottom: '3rem'}}>
              <iframe
                src="https://www.youtube.com/embed/J0h_Uzf6QNs" // Thay thế bằng ID video của bạn
                title="JEGA Vietnam Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Bắt đầu nhanh Section */}
            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
              <Heading as="h2">Bắt đầu nhanh</Heading>
              <p>Làm quen với JEGA một cách nhanh chóng và hiệu quả.</p>
            </div>
            <div className="info-card-container">
              <InfoCard
                to="/docs/" // Liên kết đến trang chủ tài liệu
                title="Giới thiệu JEGA"
                description="Tìm hiểu tổng quan về JEGA, các tính năng chính và lợi ích mà phần mềm mang lại."
              />
              <InfoCard
                to="/docs/trung-tam-huong-dan/huong-dan-nguoi-dung-moi/dang-ky-tai-khoan"
                title="Hướng dẫn cho người mới"
                description="Các bước đầu tiên để đăng ký, cài đặt và làm quen với giao diện JEGA."
              />
            </div>

            {/* Khám phá các tính năng Section */}
            <div style={{textAlign: 'center', marginBottom: '2rem', marginTop: '3rem'}}>
              <Heading as="h2">Khám phá các tính năng</Heading>
              <p>Đi sâu vào các công cụ và tính năng mạnh mẽ của JEGA.</p>
            </div>
            <div className="info-card-container" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}> {/* Cho phép 3 cột nếu đủ không gian */}
              <InfoCard
                to="/docs/trung-tam-huong-dan/thiet-ke-xay-dung/tao-mat-bang"
                title="Thiết kế & Xây dựng"
                description="Học cách tạo mặt bằng, chỉnh sửa và dựng các cấu trúc xây dựng."
              />
              <InfoCard
                to="/docs/trung-tam-huong-dan/tuy-chinh-noi-that/tu-do-noi-that"
                title="Tùy chỉnh Nội thất"
                description="Khám phá thư viện nội thất phong phú và các công cụ tùy chỉnh chi tiết."
              />
              <InfoCard
                to="/docs/trung-tam-huong-dan/ket-xuat/thiet-lap-ket-xuat"
                title="Kết xuất & Vẽ AI"
                description="Tạo hình ảnh render chất lượng cao và sử dụng công cụ AI để tạo bản vẽ."
              />
              <InfoCard
                to="/docs/trung-tam-huong-dan/vat-lieu-thiet-ke"
                title="Vật liệu Thiết kế"
                description="Quản lý và áp dụng các loại vật liệu đa dạng cho thiết kế của bạn."
              />
              <InfoCard
                to="/docs/trung-tam-huong-dan/bao-gia-va-xuat-ban-ve"
                title="Báo giá & Bản vẽ"
                description="Tìm hiểu cách tạo báo giá và xuất các bản vẽ kỹ thuật chi tiết."
              />
              <InfoCard
                to="/blog" // Liên kết đến trang blog
                title="Cập nhật & Bộ sưu tập"
                description="Xem các tính năng mới nhất và bộ sưu tập thiết kế trên Blog của chúng tôi."
              />
            </div>

             {/* Cần trợ giúp? Section */}
             <div style={{textAlign: 'center', marginBottom: '2rem', marginTop: '3rem'}}>
              <Heading as="h2">Cần trợ giúp?</Heading>
            </div>
            <div className="info-card-container">
              <InfoCard
                to="/docs/trung-tam-huong-dan/hoi-dap/cau-hoi-thuong-gap"
                title="Câu hỏi thường gặp (FAQ)"
                description="Tìm câu trả lời cho các câu hỏi phổ biến về JEGA."
              />
              <InfoCard
                to="/docs/trung-tam-huong-dan/hoi-dap/lien-he-ho-tro"
                title="Liên hệ Hỗ trợ"
                description="Kết nối với đội ngũ hỗ trợ của chúng tôi để được giúp đỡ."
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
