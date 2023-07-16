import Switch from '~/components/Switch';
import {
  ProfileIcon,
  FavouriteIcon,
  TikTokIcon,
  SettingIcon,
  LanguageIcon,
  FeedbackIcon,
  KeyboardIcon,
  MoonIcon,
  LogoutIcon
} from '~/assets/Icons';

const dataMenuItemLogout = [
  {
    title: 'Tiếng Việt',
    icon: <LanguageIcon width="20" height="20" viewBox="0 0 48 48" />,
    children: [
      {
        type: 'language',
        title: 'Tiếng Việt',
        englishTranslate: 'VietNamese'
      },
      {
        type: 'language',
        title: 'English',
        englishTranslate: 'Enlish'
      }
    ]
  },
  {
    title: 'Phản hồi và trợ giúp',
    icon: <FeedbackIcon width="20" height="20" viewBox="0 0 48 48" />
  },
  {
    title: 'Phím tắt trên bàn phím  ',
    icon: <KeyboardIcon width="20" height="20" viewBox="0 0 48 48" />
  },
  {
    title: 'Chế độ tối',
    icon: <MoonIcon width="20" height="20" viewBox="0 0 48 48" />,
    otherComponent: <Switch />
  }
];

const dataMenuItemLogin = [
  {
    title: 'Xem hồ sơ',
    icon: <ProfileIcon width="20" height="20" viewBox="0 0 48 48" />
  },
  {
    title: 'Yêu thích',
    icon: <FavouriteIcon width="20" height="20" viewBox="0 0 48 48" />
  },
  {
    title: 'Nhận xu',
    icon: <TikTokIcon width="20" height="20" viewBox="0 0 20 20" />
  },
  {
    title: 'Cài đặt',
    icon: <SettingIcon width="20" height="20" viewBox="0 0 48 48" />
  },

  ...dataMenuItemLogout,

  {
    title: 'Đăng xuất',
    icon: <LogoutIcon width="20" height="20" viewBox="0 0 48 48" />,
    border: 'borderTop'
  }
];

export { dataMenuItemLogout, dataMenuItemLogin };
