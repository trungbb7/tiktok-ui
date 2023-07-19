import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';
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

HeaderMenu.propTypes = {
  data: PropTypes.object,
  onBack: PropTypes.func
};

export default HeaderMenu;
