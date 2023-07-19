import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
  children,
  onClick,
  primary,
  outline,
  leftIcon,
  rightIcon,
  to,
  href,
  otherComponent,
  ...passProps
}) {
  let Component = 'button';

  const props = {
    onClick,
    ...passProps
  };
  const classNameM = cx('wrapper', {
    primary,
    outline
  });

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = 'a';
  }

  return (
    <Component className={classNameM} {...props}>
      <div className={cx('main')}>
        {leftIcon && <span className={cx('left-icon')}>{leftIcon}</span>}
        <span className={cx('child-btn')}>{children}</span>
        {rightIcon && <span className={cx('right-icon')}>{rightIcon}</span>}
      </div>
      {otherComponent && (
        <div
          onClick={(e) => {
            e.target.parentNode.classList.toggle(`${cx('active')}`);
          }}
          className={cx('other')}>
          {otherComponent}
        </div>
      )}
    </Component>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  to: PropTypes.string,
  href: PropTypes.string,
  otherComponent: PropTypes.element
};

export default Button;
