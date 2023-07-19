import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/DefaultLayout/Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}></div>
        {children}
      </div>
    </div>
  );
}

DefaultLayout.prototype = {
  children: PropTypes.node
};

export default DefaultLayout;
