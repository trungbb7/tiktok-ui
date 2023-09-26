import classNames from 'classnames/bind';
import styles from './ContentHomePageContainer.module.scss';
import Img from '~/components/Img';
import Button from '../Button';

import VideoItem from './VideoItem';
import { CheckedIcon, MusicNoteIcon } from '~/assets/Icons';

const cx = classNames.bind(styles);

function ContentHomePageItem({
  avatar,
  userName,
  name,
  isVerified,
  description,
  musicTitle,
  isFollowing = false,
  // loveQuantity,
  // commentQuantity,
  // favoriteQuantity,
  // shareQuantity,
  // thumbnail
  videoSrc,
  videoTimeString,
  videoLikesCount,
  videoCommentsCount,
  videoSharesCount
}) {
  return (
    <div className={cx('item')}>
      <Img className={cx('avatar-item')} src={avatar} alt={userName} />
      <div className={cx('content-wrapper')}>
        <div className={cx('description-wrapper')}>
          <div className={cx('author-info')}>
            <div className={cx('userName-wrapper')}>
              <span className={cx('userName')}>{userName}</span>
              {isVerified && (
                <CheckedIcon width="14" height="14" viewBox="0 0 48 48" className={cx('check')} />
              )}
            </div>
            <span className={cx('name')}>{name}</span>
          </div>
          <div className={cx('description')}>
            <p className={cx('description-text')}>{description}</p>
          </div>
          <div className={cx('musicDescription')}>
            <MusicNoteIcon
              className={cx('music-icon')}
              width="14"
              height="14"
              viewBox="0 0 48 48"
            />
            <span className={cx('musicTitle')}>{musicTitle}</span>
          </div>
          <Button className={cx('follow-btn')}>Follow</Button>
        </div>

        <VideoItem
          src={videoSrc}
          timeString={videoTimeString}
          likesCount={videoLikesCount}
          commentsCount={videoCommentsCount}
          sharesCount={videoSharesCount}
        />
      </div>
    </div>
  );
}

export default ContentHomePageItem;
