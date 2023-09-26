import classNames from 'classnames/bind';
import styles from './MenuFooter.module.scss';
import FooterItem from './FooterItem';

const cx = classNames.bind(styles);

function FooterItemContainer({ data }) {
  return (
    <div className={cx('footerItem-container')}>
      {data.map((item, index) => {
        return <FooterItem key={index} title={item.title} href={item.href} popper={item.popper} />;
      })}
    </div>
  );
}

export default FooterItemContainer;
