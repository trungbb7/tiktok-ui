import classNames from 'classnames/bind';
import styles from './MenuFooter.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/themes/light.css';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

function FooterItem({ title, href, popper, type, alt = 'footerItem' }) {
  const Tag = type ? 'div' : 'a';
  return (
    <Fragment>
      {popper ? (
        <Tippy content={popper} placement="top" theme="white" interactive="true">
          <div
            target="_blank"
            rel="noreferrer"
            href={href}
            alt={alt}
            className={cx('footer-item', 'more')}>
            {title}
          </div>
        </Tippy>
      ) : (
        <Tag target="_blank" rel="noreferrer" href={href} alt={alt} className={cx('footer-item')}>
          {title}
        </Tag>
      )}
    </Fragment>
  );
}

export default FooterItem;
