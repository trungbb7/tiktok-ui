import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';
import AccountItem from './AccountItem';
import dataAccountItems from '~/assets/data/dataAccountItems';

const cx = classNames.bind(styles);

function SuggestAccounts({ label }) {
  return (
    <div className={cx('suggest-account')}>
      <p className={cx('label')}>{label}</p>
      <div className={cx('listAccounts')}>
        {dataAccountItems.map((accountItem, index) => (
          <AccountItem
            key={index}
            src={accountItem.image}
            userName={accountItem.userName}
            name={accountItem.name}
            isVerified={accountItem.isVerified}
          />
        ))}
      </div>
      <div className={cx('more-btn')}>Xem thêm</div>
    </div>
  );
}

export default SuggestAccounts;
