import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Trung tâm hướng dẫn',
      // className: 'sidebar-category-main-helpcenter', // Optional: add if custom styling is needed
      items: [
        {
          type: 'category',
          label: 'Tổng quan',
          // className: 'sidebar-category-overview', // Optional
          items: [
            {
              type: 'doc',
              id: 'trung-tam-huong-dan/tong-quan/gioi-thieu',
              label: 'Giới thiệu JEGA', 
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
              type: 'category',
              label: 'Trần và Tường',
              className: 'sidebar-category-ceilingwall',
              items: [
                {
                  type: 'doc',
                  id: 'trung-tam-huong-dan/thiet-ke-xay-dung/tran-va-tuong-tam-op-tran/cach-de-xoa-tran-nha',
                  label: 'Cách xóa trần nhà',
                  className: 'sidebar-item-ceiling-delete'
                },
                {
                  type: 'doc',
                  id: 'trung-tam-huong-dan/thiet-ke-xay-dung/tran-va-tuong-tam-op-tran/cach-tang-kich-thuoc-tam-op-tran',
                  label: 'Thay đổi kích thước tấm ốp',
                  className: 'sidebar-item-ceiling-resize'
                },
                {
                  type: 'doc',
                  id: 'trung-tam-huong-dan/thiet-ke-xay-dung/tran-va-tuong-tam-op-tran/cach-thay-doi-vat-lieu-tam-op-tran',
                  label: 'Thay đổi vật liệu tấm ốp',
                  className: 'sidebar-item-ceiling-material'
                },
                {
                  type: 'doc',
                  id: 'trung-tam-huong-dan/thiet-ke-xay-dung/tran-va-tuong-tam-op-tran/cach-sap-xep-tam-op-cach-deu-nhau',
                  label: 'Sắp xếp tấm ốp cách đều',
                  className: 'sidebar-item-ceiling-arrange'
                },
                {
                  type: 'doc',
                  id: 'trung-tam-huong-dan/thiet-ke-xay-dung/tran-va-tuong-tam-op-tran/cach-lap-den-downlight',
                  label: 'Lắp đèn downlight',
                  className: 'sidebar-item-ceiling-downlight'
                },
                {
                  type: 'doc',
                  id: 'trung-tam-huong-dan/thiet-ke-xay-dung/tran-va-tuong-tam-op-tran/cach-di-chuyen-tam-op-tran',
                  label: 'Di chuyển tấm ốp trần',
                  className: 'sidebar-item-ceiling-move'
                },
                {
                  type: 'doc',
                  id: 'trung-tam-huong-dan/thiet-ke-xay-dung/tran-va-tuong-tam-op-tran/cach-xoay-tam-op',
                  label: 'Xoay tấm ốp trần',
                  className: 'sidebar-item-ceiling-rotate'
                },
                {
                  type: 'doc',
                  id: 'trung-tam-huong-dan/thiet-ke-xay-dung/tran-va-tuong-tam-op-tran/cach-chuyen-doi-canh-thang-thanh-canh-cong-trong-tuy-chinh-tran-nha',
                  label: 'Chuyển cạnh thẳng thành cong',
                  className: 'sidebar-item-ceiling-edge-curve'
                },
                {
                  type: 'doc',
                  id: 'trung-tam-huong-dan/thiet-ke-xay-dung/tran-va-tuong-tam-op-tran/su-khac-biet-giua-op-cach-quang-va-op-lien-tuc',
                  label: 'Ốp cách quãng & liên tục',
                  className: 'sidebar-item-ceiling-spacing'
                },
                {
                  type: 'doc',
                  id: 'trung-tam-huong-dan/thiet-ke-xay-dung/tran-va-tuong-tam-op-tran/tam-op-chuyen-sang-mau-den',
                  label: 'Tấm ốp chuyển màu đen',
                  className: 'sidebar-item-ceiling-color'
                },
                {
                  type: 'doc',
                  id: 'trung-tam-huong-dan/thiet-ke-xay-dung/tran-va-tuong-tam-op-tran/tai-sao-khong-thay-den-spotlight-sau-khi-lap-tam-op-tran',
                  label: 'Sửa lỗi đèn spotlight',
                  className: 'sidebar-item-ceiling-spotlight'
                }
              ]
            },
            {
              type: 'doc',
              id: 'trung-tam-huong-dan/thiet-ke-xay-dung/tao-vach-ngan',
              label: 'Tạo vách ngăn',
              className: 'sidebar-item-designbuild-partition'
            }
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
          label: 'Cập nhật hàng tháng',
          className: 'sidebar-category-monthlyupdates',
          items: [
            {
              type: 'autogenerated',
              dirName: 'trung-tam-huong-dan/cap-nhat-hang-thang',
            }
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
    },
    {
      type: 'category',
      label: 'Online Training',
      className: 'sidebar-category-onlinetraining',
      items: [
        {
          type: 'doc',
          id: 'online-training/overview',
          label: 'Tổng quan',
        },
        {
          type: 'category',
          label: 'JEGA Cloud Design',
          items: [
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/index', label: 'Tổng Quan Video JCD'},
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/magic-video-3d-animation', label: 'Magic Video Animation' },
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/video-marketing-3d', label: 'Video Marketing 3D' },
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/render-video-chuyen-dong-anh-sang', label: 'Render Video & Ánh Sáng' },
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/four-tinh-nang-noi-bat', label: '4 Tính Năng Nổi Bật' },
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/render-video-chat-luong-cao', label: 'Render Video Chất Lượng Cao' },
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/chuyen-dong-phong-khach-phap', label: 'Chuyển Động Phòng Khách Pháp' },
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/chuyen-dong-phong-khach', label: 'Chuyển Động Phòng Khách' },
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/model-dragging', label: 'Model Dragging' },
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/vast-model-library', label: 'Vast Model Library' },
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/sunlight-setting', label: 'Sunlight Setting' },
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/ceiling-demo', label: 'Ceiling Demo' },
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/free-modeling-demo', label: 'Free Modeling Demo' },
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/jcd-demo', label: 'JCD Demo' },
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/kitchen-demo', label: 'Kitchen Demo' },
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/tiling-demo', label: 'Tiling Demo' },
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/wardrobe-demo', label: 'Wardrobe Demo' },
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/demo-thiet-ke-cua-so-nhom', label: 'Demo Thiết Kế Cửa Sổ Nhôm' },
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/demo-thiet-ke-phong-tam', label: 'Demo Thiết Kế Phòng Tắm' },
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/demo-thiet-ke-tuong-tran', label: 'Demo Thiết Kế Tường & Trần' },
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/demo-thiet-ke-ngoai-that', label: 'Demo Thiết Kế Ngoại Thất' },
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/demo-thiet-ke-tu-bep', label: 'Demo Thiết Kế Tủ Bếp' },
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/demo-thiet-ke-tu-quan-ao', label: 'Demo Thiết Kế Tủ Quần Áo' },
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/demo-thiet-ke-gach-op-lat', label: 'Demo Thiết Kế Gạch Ốp Lát' },
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/macchiato-collection-demo', label: 'Macchiato Collection Demo' },
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/render-anh-sang-tu-nhien', label: 'Render Ánh Sáng Tự Nhiên' },
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/render-anh-sang-vat-lieu', label: 'Render Ánh Sáng & Vật Liệu' },
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/introducing-jcd-platform', label: 'Introducing JCD Platform' },
            { type: 'doc', id: 'online-training/jega-cloud-design-videos/revenue-solutions-tile-enterprises', label: 'Revenue Solutions - Tile' },
          ],
        },
        {
          type: 'doc',
          id: 'online-training/training-beginners-guide',
          label: 'Beginner\'s Guide',
        },
        {
          type: 'category',
          label: 'Online Training JCD',
          items: [
            { type: 'doc', id: 'online-training/ot-jcd-01', label: 'Buổi 1 (Video chính)' },
            { type: 'doc', id: 'online-training/ot-jcd-02', label: 'Buổi 1 (d84J2090Pxw)' },
            { type: 'doc', id: 'online-training/ot-jcd-03', label: 'Buổi 1 (02-10-2024)' },
            { type: 'doc', id: 'online-training/ot-jcd-04', label: 'Buổi 2 (03-10-2024)' },
            { type: 'doc', id: 'online-training/ot-jcd-05', label: 'Buổi 3 (04-10-2024)' },
            { type: 'doc', id: 'online-training/ot-jcd-06', label: 'Buổi 1 (09-10-2024)' },
            { type: 'doc', id: 'online-training/ot-jcd-07', label: 'Buổi 2 (10-10-2024)' },
            { type: 'doc', id: 'online-training/ot-jcd-08', label: 'Buổi 2 (17-10-2024)' },
            { type: 'doc', id: 'online-training/ot-jcd-09', label: 'Buổi 3 (18-10-2024)' },
            { type: 'doc', id: 'online-training/ot-jcd-10', label: 'Buổi 1 (21-10-2024)' },
            { type: 'doc', id: 'online-training/ot-jcd-11', label: 'Buổi 3 (25-10-2024)' },
            { type: 'doc', id: 'online-training/ot-jcd-12', label: 'Buổi 2 (01-11-2024)' },
            { type: 'doc', id: 'online-training/ot-jcd-13', label: 'Buổi 1 (04-11-2024)' },
            { type: 'doc', id: 'online-training/ot-jcd-14', label: 'Buổi 1 (11-11-2024)' },
            { type: 'doc', id: 'online-training/ot-jcd-15', label: 'Buổi 3 (15-11-2024)' },
            { type: 'doc', id: 'online-training/ot-jcd-16', label: 'Buổi 1 (19-11-2024)' },
            { type: 'doc', id: 'online-training/ot-jcd-17', label: 'Buổi 3 (29-11-2024)' },
            { type: 'doc', id: 'online-training/ot-jcd-18', label: 'Buổi 1 (02-12-2024)' },
            { type: 'doc', id: 'online-training/ot-jcd-19', label: 'Buổi 2 (04-12-2024)' },
            { type: 'doc', id: 'online-training/ot-jcd-20', label: 'Buổi 1 (09-12-2024)' },
            { type: 'doc', id: 'online-training/ot-jcd-21', label: 'Buổi 2 (11-12-2024)' },
            { type: 'doc', id: 'online-training/ot-jcd-22', label: 'Buổi 2 (18-12-2024)' },
            { type: 'doc', id: 'online-training/ot-jcd-23', label: 'Buổi 3 (20-12-2024)' },
            { type: 'doc', id: 'online-training/ot-jcd-24', label: 'Buổi 1 (23-12-2024)' },
            { type: 'doc', id: 'online-training/ot-jcd-25', label: 'Buổi 1 (30-12-2024)' },
            { type: 'doc', id: 'online-training/ot-jcd-26', label: 'Buổi 2 (02-01-2025)' },
          ],
        },
        {
          type: 'category',
          label: 'Thực Chiến JCD',
          items: [
            { type: 'doc', id: 'online-training/tc-jcd-01-render', label: 'Hướng dẫn Render' },
            { type: 'doc', id: 'online-training/tc-jcd-02-render-vr-720', label: 'Render Link VR 720 độ' },
            { type: 'doc', id: 'online-training/tc-jcd-03-render-focus', label: 'Render Focus' },
          ],
        },
        {
          type: 'category',
          label: 'JCD Highlight Function',
          items: [
            { type: 'doc', id: 'online-training/jcd-highlight-functions/index', label: 'Tổng Quan'},
            { type: 'doc', id: 'online-training/jcd-highlight-functions/tuy-chinh-linh-hoat', label: 'Tùy Chỉnh Linh Hoạt' },
            { type: 'doc', id: 'online-training/jcd-highlight-functions/thiet-ke-phong-thong-minh', label: 'Thiết Kế Phòng Thông Minh' },
            { type: 'doc', id: 'online-training/jcd-highlight-functions/de-dang-tao-mat-bang', label: 'Dễ Dàng Tạo Mặt Bằng' },
            { type: 'doc', id: 'online-training/jcd-highlight-functions/dan-dung-tai-thiet-ke-ai', label: 'Dàn Dựng & Tái Thiết Kế AI' },
            { type: 'doc', id: 'online-training/jcd-highlight-functions/enhanced-rendering', label: 'Enhanced Rendering' },
            { type: 'doc', id: 'online-training/jcd-highlight-functions/ai-intelligent-sample-room', label: 'AI Intelligent Sample Room' },
            { type: 'doc', id: 'online-training/jcd-highlight-functions/render-video-hieu-ung-3d', label: 'Render Video Hiệu Ứng 3D' },
            { type: 'doc', id: 'online-training/jcd-highlight-functions/tao-virtual-showroom', label: 'Tạo Virtual Showroom' },
            { type: 'doc', id: 'online-training/jcd-highlight-functions/visioneer-tuong-tac-khach-hang', label: 'Visioneer - Tương Tác Khách Hàng' },
            { type: 'doc', id: 'online-training/jcd-highlight-functions/render-vr-720', label: 'Render VR Toàn Cảnh 720 Độ' },
            { type: 'doc', id: 'online-training/jcd-highlight-functions/hieu-nang-su-dung-cao', label: 'Hiệu Năng Sử Dụng Cao' },
            { type: 'doc', id: 'online-training/jcd-highlight-functions/nhan-dien-mat-bang-thong-minh', label: 'Nhận Diện Mặt Bằng Thông Minh' },
            { type: 'doc', id: 'online-training/jcd-highlight-functions/diem-danh-tinh-nang-manh-me', label: 'Điểm Danh Tính Năng Mạnh Mẽ' },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Jega Collection',
      className: 'sidebar-category-jegacollection',
      // link property removed to make the category label an expander
      items: [
        {
          type: 'doc',
          id: 'jega-collection/index', 
          label: 'Tổng quan', // This will be the first clickable item
        },
        { type: 'doc', id: 'jega-collection/collections/temporal', label: 'BST Temporal' },
        { type: 'doc', id: 'jega-collection/collections/macchiato', label: 'BST Macchiato' },
        { type: 'doc', id: 'jega-collection/collections/harmony', label: 'BST Harmony' },
        { type: 'doc', id: 'jega-collection/collections/vista', label: 'BST Vista' },
        { type: 'doc', id: 'jega-collection/collections/phantom', label: 'BST Phantom' },
        { type: 'doc', id: 'jega-collection/collections/van-der-rohe', label: 'BST Van der Rohe' },
        { type: 'doc', id: 'jega-collection/collections/bliss', label: 'BST Bliss' },
        { type: 'doc', id: 'jega-collection/collections/archi', label: 'BST Archi' },
        { type: 'doc', id: 'jega-collection/collections/eden', label: 'BST Eden' },
        { type: 'doc', id: 'jega-collection/collections/chantilly', label: 'BST Chantilly' },
        { type: 'doc', id: 'jega-collection/collections/sierra', label: 'BST Sierra' },
        { type: 'doc', id: 'jega-collection/collections/aurora', label: 'BST Aurora' },
        { type: 'doc', id: 'jega-collection/collections/grove', label: 'BST Grove' },
        { type: 'doc', id: 'jega-collection/collections/lumen', label: 'BST Lumen' },
      ],
    }
    // Any other items that were previously after "Hỏi đáp" and not part of "Trung tâm hướng dẫn" would go here.
    // Based on the previous file content, there are no other items.
    // The comment "// "Tài liệu cơ bản" category removed." is omitted as it's not an active sidebar item.
  ],
};

export default sidebars;
