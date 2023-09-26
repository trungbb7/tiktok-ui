import classNames from 'classnames/bind';
import styles from './MenuShare.module.scss';
import ShareItem from './ShareItem';
import shareItems from '~/assets/data/shareItems';
import { ArrowIcon } from '~/assets/Icons';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
const cx = classNames.bind(styles);

function MenuShare(props, ref) {
  const [items, setItems] = useState(shareItems.slice(0, 5));
  const arrowRef = useRef();
  useImperativeHandle(ref, () => ({
    resetShareItem() {
      setItems(shareItems.slice(0, 5));
      arrowRef.current.style.display = 'block';
    }
  }));
  const handleClick = () => {
    arrowRef.current.style.display = 'none';
    setItems(shareItems);
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('menu-share')}>
        {items.map((item, index) => (
          <ShareItem key={index} title={item.title} icon={item.icon} />
        ))}
        <button className={cx('arrow-wrapper')} onClick={handleClick} ref={arrowRef}>
          <ShareItem arrow icon={<ArrowIcon width="24" height="24" viewBox="0 0 48 48" />} />
        </button>
      </div>
    </div>
  );
}

export default forwardRef(MenuShare);
