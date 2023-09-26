import classNames from 'classnames/bind';
import styles from './SearchResultItem.module.scss';
import { Link } from 'react-router-dom';
import { UpIcon, FireIcon, DotIcon, MiniSearchIcon, CheckedIcon } from '~/assets/Icons';
import Img from '~/components/Img';

const cx = classNames.bind(styles);

function SearchResultItem(props) {
  if (props.type === 'general') {
    if (!props.image) {
      return (
        <div tabIndex={0} className={cx('wrapper')}>
          <div className={cx('search-wrapper')}>
            <MiniSearchIcon width="15" height="15" viewBox="0 0 48 48" />
          </div>
          <h4 className={cx('search-title')}>{props.content}</h4>
        </div>
      );
    }

    return (
      <Link to={`@${props.userName}`}>
        <div data-cp="true" tabIndex={0} className={cx('wrapper')}>
          <span className={cx('avatar-wrapper')}>
            <Img className={cx('avatar')} src={props.image} alt="avatar" />
          </span>
          <div className={cx('info')}>
            <div className={cx('userNameWrapper')}>
              <h4 className={cx('userName')}>{props.userName}</h4>
              {props.isVerified ? (
                <CheckedIcon className={cx('check')} width="14" height="14" viewBox="0 0 48 48" />
              ) : null}
            </div>
            <p className={cx('name')}>{props.name}</p>
          </div>
        </div>
      </Link>
    );
  } else if (props.type === 'guess') {
    let Icon = DotIcon;
    if (props.wordType) {
      if (props.wordType === '17') {
        Icon = UpIcon;
      } else if (props.wordType === '2') {
        Icon = FireIcon;
      }
    }

    return (
      <div tabIndex={0} className={cx('wrapper')}>
        <div className={cx('icon-wrapper')}>{<Icon />}</div>
        <h4 className={cx('guess-text')}>{props.text}</h4>
      </div>
    );
  }
  return (
    <div tabIndex="0" className={cx('more-wrapper')}>
      <span className={cx('more-title')}>{props.content}</span>
    </div>
  );
}

export default SearchResultItem;
