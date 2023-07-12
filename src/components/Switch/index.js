import classNames from 'classnames/bind';

import styles from './Switch.module.scss';

const cx = classNames.bind(styles);

function Switch({ className }) {
  return (
    <div className={cx('wrapper', className)}>
      <span className={cx('icon')}></span>
    </div>
  );
}

export default Switch;
