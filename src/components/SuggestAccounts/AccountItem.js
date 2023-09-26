import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';
import Img from '~/components/Img';
import { CheckedIcon } from '~/assets/Icons';

const cx = classNames.bind(styles);

function AccountItem({ alt, src, userName, name, isVerified }) {
  return (
    <div className={cx('account-item')}>
      <Img className={cx('avatar')} src={src} alt={alt ? alt : userName} />
      <div className={cx('user-info')}>
        <div className={cx('userName-wrapper')}>
          <span className={cx('userName')}>{userName}</span>
          {isVerified && (
            <CheckedIcon className={cx('check')} width="14" height="14" viewBox="0 0 48 48" />
          )}
        </div>
        <div className={cx('name')}>{name}</div>
      </div>
    </div>
  );
}

export default AccountItem;
