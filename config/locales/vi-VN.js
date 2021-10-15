import home from './pages/home.js'
import story from './pages/story.js'
import products from './pages/products.js'
import events from './pages/events.js'
import recruitment from './pages/recruitment.js'


export default {
  common: {
    vi: 'Việt Nam',
    en: 'Tiếng Anh',
    'see-more': 'Xem Thêm',
    apply: 'Nộp đơn',
    confirm: 'Xác nhận',
    send: 'Gửi',
    'join-group': 'Tham Gia Đội Ngũ',
  },
  home: home.vi,
  story: story.vi,
  products: products.vi,
  events: events.vi,
  recruitment: recruitment.vi,
  form: {
    name: 'Họ và tên*',
    mail: 'Email*',
    content: 'Thư ứng tuyển',
    upload: 'Upload CV',
    success: 'Thông tin đã được gửi!',
    phone: "Số điện thoại*",
    address: "Địa chỉ",
    level: "Trình độ",
    error: {
      name: 'Họ và tên không hợp lệ',
      mail: 'Email không hợp lệ',
      upload: 'Yêu cầu gửi file CV'
    },
    profile: 'Hồ sơ được gửi thành công',
    thanks: 'Cảm ơn bạn đã lựa chọn đồng hành cùng RM Healthcare.'
  },
  modal: {
    title: 'Tài liệu sản phẩm mang tính tham khảo, chỉ dành cho nhân viên y tế.',
    understand: 'Đã hiểu, không thông báo lại',
    'clsoe-aler': 'Đóng thông báo'

  }
};
