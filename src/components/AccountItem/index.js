import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function AccountItem(props) {
  return (
    <div className={cx('wrapper')}>
      <div>
        <img className={cx('avatar')} src={props.image} alt="avatar" />
      </div>
      <div className={cx('info')}>
        <div className={cx('userNameWrapper')}>
          <h4 className={cx('userName')}>{props.userName}</h4>
          {props.isVerified ? (
            <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
          ) : null}
        </div>
        <p className={cx('name')}>{props.name}</p>
      </div>
    </div>
  );
}

export default AccountItem;
