import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ children, className }) {
  const classNameN = cx('btn', {
    [className]: className
  });
  return (
    <button className={classNameN}>
      <div className={cx('inner-btn')}>{children}</div>
    </button>
  );
}

export default Button;
