import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';
import { useState } from 'react';

import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function Menu({ element, data }) {
  const [history, setHistory] = useState([data]);
  const current = history[history.length - 1];
  // console.log(history);
  return (
    <HeadlessTippy
      // visible
      delay={[0, 700]}
      placement="bottom"
      interactive={true}
      onHidden={() => {
        setHistory(() => history.slice(0, 1));
      }}
      render={(attris) => (
        <div className={cx('menuPoper-wrapper')} {...attris}>
          <PopperWrapper className={cx('menu-wrapper')}>
            {/* Menu */}
            <div className={cx('wrapper')}>
              {history.length > 1 && (
                <HeaderMenu
                  onBack={() => {
                    if (history.length > 1) {
                      setHistory(history.slice(0, history.length - 1));
                    }
                  }}
                  data={{ title: 'Ngôn ngữ' }}
                />
              )}
              {current &&
                current.map((item, index) => {
                  return (
                    <MenuItem
                      className={item.type === 'language' && 'language-style'}
                      key={index}
                      data={item}
                      onClick={() => {
                        if (item.children) {
                          setHistory((prev) => [...prev, item.children]);
                        }
                      }}
                    />
                  );
                })}
            </div>
          </PopperWrapper>
          <span className={cx('arrow')}></span>
        </div>
      )}>
      {element}
    </HeadlessTippy>
  );
}

export default Menu;
