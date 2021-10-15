import home from './pages/home.js'
import story from './pages/story.js'
import products from './pages/products.js'
import events from './pages/events.js'
import recruitment from './pages/recruitment.js'

export default {
  common: {
    vi: 'Việt Nam',
    en: 'Tiếng Anh',
    'see-more': 'See more',
    apply: 'Apply now',
    confirm: 'Confirm',
    send: 'Send',
    'join-group': 'Join Group'
  },
  home: home.en,
  story: story.en,
  products: products.en,
  events: events.en,
  recruitment: recruitment.en,
  form: {
    name: 'First and last name *',
    mail: 'Email *',
    content: 'Application letter',
    upload: 'Upload CV',
    success: 'Information has been sent!',
    phone: "Phone number * ",
    address: "Address ",
    level: "Level ",
    error: {
      name: 'Invalid first and last name',
      mail: 'Invalid email',
      upload: 'Request to send file CV'
    },
    profile: 'Profile sent successfully',
    thanks: 'Thank you for choosing to accompany RM Healthcare.'
  },
  modal: {
    title: 'Our product references are intended for medical use only.',
    understand: `Don't show this message again`,
    'clsoe-aler': 'Close'

  }
};
