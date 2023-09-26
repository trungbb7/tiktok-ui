import classNames from 'classnames/bind';
import styles from './MenuFooter.module.scss';
import FooterItemContainer from './FooterItemContainer';
import dataFooterItems from '~/assets/data/dataFooterItems';
import FooterItem from './FooterItem';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

function MenuFooter() {
  return (
    <div className={cx('menu-footer')}>
      {dataFooterItems.map((dataFooterItem, index) => (
        <Fragment key={index}>
          {dataFooterItem.type === 'single' ? (
            <FooterItem type={dataFooterItem.type} title={dataFooterItem.title} />
          ) : (
            <FooterItemContainer data={dataFooterItem} />
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default MenuFooter;
