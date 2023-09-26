import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuFooter() {
  return <div className={cx('menu-footer')}></div>;
}
