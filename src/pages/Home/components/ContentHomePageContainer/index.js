import classNames from 'classnames/bind';
import styles from './ContentHomePageContainer.module.scss';
import ContentHomePageItem from './ContentHomePageItem';
import { suggestService } from '~/services';
import { Fragment, useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function ContentHomePageContainer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async function () {
      const suggestItems = await suggestService();
      const newData = suggestItems.map((item, index) => (
        <ContentHomePageItem
          key={index}
          avatar={item.avatar}
          userName={item.nickname}
          name={`${item.first_name} ${item.last_name}`}
          isVerified={item.tick}
          description={item.popular_video.description}
          musicTitle={item.popular_video.music}
          videoSrc={item.popular_video.file_url}
          videoTimeString={item.popular_video.meta.playtime_string}
          videoLikesCount={item.popular_video.likes_count}
          videoCommentsCount={item.popular_video.comments_count}
          videoSharesCount={item.popular_video.shares_count}
        />
      ));
      setData(newData);
    })();
  }, []);
  return (
    <div className={cx('contentHome-container')}>
      <Fragment>{data}</Fragment>
    </div>
  );
}

export default ContentHomePageContainer;
