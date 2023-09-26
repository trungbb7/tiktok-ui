import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItem({ icon, activeIcon, title, to }) {
  return (
    <NavLink
      to={to}
      className={(nav) => {
        return cx('menu-item', {
          active: nav.isActive
        });
      }}>
      {(nav) => {
        return nav.isActive ? (
          <Fragment>
            {activeIcon}
            <span className={cx('title')}>{title}</span>
          </Fragment>
        ) : (
          <Fragment>
            {icon}
            <span className={cx('title')}>{title}</span>
          </Fragment>
        );
      }}
    </NavLink>
  );
}

MenuItem.propTypes = {
  icon: PropTypes.node.isRequired,
  activeIcon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};
export default MenuItem;
