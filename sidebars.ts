import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tổng quan',
      className: 'sidebar-category-overview',
      items: [
        {
          type: 'doc',
          id: 'trung-tam-huong-dan/tong-quan/gioi-thieu',
          label: 'Giới thiệu JEGA',
          className: 'sidebar-item-overview-introduction'
        },
        {
          type: 'doc',
          id: 'trung-tam-huong-dan/tong-quan/bat-dau-nhanh',
          label: 'Bắt đầu nhanh',
          className: 'sidebar-item-overview-quickstart'
        },
      ],
    },
    {
      type: 'category',
      label: 'Hướng dẫn người dùng mới',
      className: 'sidebar-category-newuserguide',
      items: [
        {
          type: 'doc',
          id: 'trung-tam-huong-dan/huong-dan-nguoi-dung-moi/dang-ky-tai-khoan',
          label: 'Đăng ký tài khoản',
          className: 'sidebar-item-newuser-register'
        },
        {
          type: 'doc',
          id: 'trung-tam-huong-dan/huong-dan-nguoi-dung-moi/thiet-lap-tai-khoan',
          label: 'Thiết lập tài khoản',
          className: 'sidebar-item-newuser-setup'
        },
        {
          type: 'doc',
          id: 'trung-tam-huong-dan/huong-dan-nguoi-dung-moi/giao-dien-co-ban',
          label: 'Giao diện cơ bản',
          className: 'sidebar-item-newuser-interface'
        },
      ],
    },
    {
      type: 'category',
      label: 'Thiết kế & Xây dựng',
      className: 'sidebar-category-designbuild',
      items: [
        {
          type: 'doc',
          id: 'trung-tam-huong-dan/thiet-ke-xay-dung/tao-mat-bang',
          label: 'Tạo mặt bằng',
          className: 'sidebar-item-designbuild-floorplancreate'
        },
        {
          type: 'doc',
          id: 'trung-tam-huong-dan/thiet-ke-xay-dung/chinh-sua-mat-bang',
          label: 'Chỉnh sửa mặt bằng',
          className: 'sidebar-item-designbuild-floorplanedit'
        },
        {
          type: 'doc',
          id: 'trung-tam-huong-dan/thiet-ke-xay-dung/tao-vach-ngan',
          label: 'Tạo vách ngăn',
          className: 'sidebar-item-designbuild-partition'
        },
      ],
    },
    {
      type: 'category',
      label: 'Tuỳ chỉnh Nội thất',
      className: 'sidebar-category-furniturecust',
      items: [
        {
          type: 'doc',
          id: 'trung-tam-huong-dan/tuy-chinh-noi-that/tu-do-noi-that',
          label: 'Thư viện nội thất',
          className: 'sidebar-item-furniturecust-library'
        },
        {
          type: 'doc',
          id: 'trung-tam-huong-dan/tuy-chinh-noi-that/tuy-chinh-vat-lieu',
          label: 'Tùy chỉnh vật liệu',
          className: 'sidebar-item-furniturecust-materials'
        },
        {
          type: 'doc',
          id: 'trung-tam-huong-dan/tuy-chinh-noi-that/bo-cuc-phong',
          label: 'Bố cục phòng',
          className: 'sidebar-item-furniturecust-roomlayout'
        },
        {
          type: 'doc',
          id: 'trung-tam-huong-dan/tuy-chinh-noi-that/cua-va-cua-so',
          label: 'Cửa và cửa sổ',
          className: 'sidebar-item-furniturecust-doorswindows'
        },
      ],
    },
    {
      type: 'category',
      label: 'Kết xuất',
      className: 'sidebar-category-rendering',
      items: [
        {
          type: 'doc',
          id: 'trung-tam-huong-dan/ket-xuat/thiet-lap-ket-xuat',
          label: 'Thiết lập Render',
          className: 'sidebar-item-rendering-setup'
        },
        {
          type: 'doc',
          id: 'trung-tam-huong-dan/ket-xuat/ket-xuat-hinh-anh',
          label: 'Kết xuất hình ảnh',
          className: 'sidebar-item-rendering-image'
        },
      ],
    },
    {
      type: 'category',
      label: 'Online Training',
      className: 'sidebar-category-onlinetraining',
      items: [
        {
          type: 'doc',
          id: 'trung-tam-huong-dan/online-training/hoc-jega-qua-video-truc-quan',
          label: 'Video hướng dẫn',
          className: 'sidebar-item-onlinetraining-videos'
        },
      ],
    },
    {
      type: 'category',
      label: 'Hỏi đáp',
      className: 'sidebar-category-faq',
      items: [
        {
          type: 'doc',
          id: 'trung-tam-huong-dan/hoi-dap/cau-hoi-thuong-gap',
          label: 'Câu hỏi thường gặp',
          className: 'sidebar-item-faq-common'
        },
        {
          type: 'doc',
          id: 'trung-tam-huong-dan/hoi-dap/lien-he-ho-tro',
          label: 'Liên hệ hỗ trợ',
          className: 'sidebar-item-faq-contact'
        },
      ],
    },
  ],
};

export default sidebars;
