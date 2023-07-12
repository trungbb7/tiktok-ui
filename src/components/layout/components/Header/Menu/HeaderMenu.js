import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function HeaderMenu({ data, onBack }) {
  return (
    <header className={cx('header-submenu')} onClick={onBack}>
      <div className={cx('header-btn')}>
        <FontAwesomeIcon className={cx('header-icon')} icon={faAngleLeft} />
      </div>
      <span className={cx('header-title')}>{data.title}</span>
    </header>
  );
}

export default HeaderMenu;
