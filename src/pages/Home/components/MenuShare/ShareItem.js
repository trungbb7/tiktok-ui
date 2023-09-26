import classNames from 'classnames/bind';
import styles from './MenuShare.module.scss';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

function ShareItem({ arrow, icon, title }) {
  return (
    <Fragment>
      {arrow ? (
        <div className={cx('arrow-btn')}>{icon}</div>
      ) : (
        <div className={cx('share-item')}>
          {icon}
          <span className={cx('title')}>{title}</span>
        </div>
      )}
    </Fragment>
  );
}

export default ShareItem;
