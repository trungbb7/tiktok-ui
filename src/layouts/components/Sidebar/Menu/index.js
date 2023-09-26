import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import MenuItem from './MenuItem';
import {
  SolidCompassIcon,
  SolidHomeIcon,
  SolidLiveIcon,
  SolidUserGroupIcon,
  RegularCompassIcon,
  RegularHomeIcon,
  RegularLiveIcon,
  RegularUseGroupIcon
} from '~/assets/Icons';
const cx = classNames.bind(styles);

function Menu() {
  return (
    <div className={cx('menu-wrapper')}>
      <MenuItem
        to="/"
        icon={<RegularHomeIcon width="32" height="32" viewBox="0 0 48 48" />}
        activeIcon={<SolidHomeIcon width="32" height="32" viewBox="0 0 48 48" />}
        title="Dành cho bạn"
      />
      <MenuItem
        to="/Following"
        icon={<RegularUseGroupIcon width="32" height="32" viewBox="0 0 48 48" />}
        activeIcon={<SolidUserGroupIcon width="32" height="32" viewBox="0 0 48 48" />}
        title="Đang Follow"
      />
      <MenuItem
        to="/Explore"
        icon={<RegularCompassIcon width="32" height="32" viewBox="0 0 48 48" />}
        activeIcon={<SolidCompassIcon width="32" height="32" viewBox="0 0 48 48" />}
        title="Khám phá"
      />
      <MenuItem
        to="/Live"
        icon={<RegularLiveIcon width="32" height="32" viewBox="0 0 32 32" />}
        activeIcon={<SolidLiveIcon width="32" height="32" viewBox="0 0 48 48" />}
        title="LIVE"
      />
    </div>
  );
}

export default Menu;
