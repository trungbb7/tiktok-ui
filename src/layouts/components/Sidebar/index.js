import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu from './Menu';
import SuggestAccounts from '~/components/SuggestAccounts';
import MenuFooter from './MenuFooter';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('hook')}>
        <aside className={cx('wrapper-for-scrollbar')}>
          <div className={cx('content')}>
            <Menu />
            <SuggestAccounts label="Các tài khoản đang follow" />
            <MenuFooter />
          </div>
          <div className={cx('scrollbar-wrapper')}></div>
        </aside>
      </div>
    </div>
  );
}

export default Sidebar;
