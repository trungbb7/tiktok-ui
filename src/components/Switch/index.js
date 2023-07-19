import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Switch.module.scss';

const cx = classNames.bind(styles);

function Switch({ className }) {
  return (
    <div className={cx('wrapper', className)}>
      <span className={cx('icon')}></span>
    </div>
  );
}

Switch.propTypes = {
  className: PropTypes.string
};
export default Switch;
