import { Fragment, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/themes/light.css';

import style from './Header.module.scss';
import images from '~/assets/images.js';
import Button from '~/components/Button';
import Menu from './Menu';
import { dataMenuItemLogout, dataMenuItemLogin } from '~/assets/data/dataMenu';
import { PlusIcon, MessageIcon, InboxIcon, MenuIcon } from '~/assets/Icons';
import Img from '~/components/Img';
import Search from '../Search';
const cx = classNames.bind(style);

function Header() {
  const [login, setLogin] = useState(true);
  return (
    <header className={cx('wrapper')}>
      <div className={cx('logo')}>
        <img src={images.logo.default} alt="logo" />
      </div>

      <Search />

      <div className={cx('action')}>
        <Button
          outline
          leftIcon={<PlusIcon width="20" height="20" viewBox="0 0 16 16" />}
          onClick={() => {
            alert('Trung dap chai');
          }}>
          Tải lên
        </Button>
        {login ? (
          <Fragment>
            <Tippy content="Tin Nhắn" theme="tooltip" placement="bottom" interactive="true">
              <div className={cx('message-wrapper')}>
                <MessageIcon width="26" height="26" viewBox="0 0 48 48" />
              </div>
            </Tippy>
            <Tippy content="Hộp thư" theme="tooltip" placement="bottom" interactive="true">
              <div className={cx('inbox-wrapper')}>
                <InboxIcon width="32" height="32" viewBox="0 0 32 32" />
                <sub className={cx('supBadge')}>13</sub>
              </div>
            </Tippy>
            <Menu
              element={
                <div className={cx('more-menu')}>
                  <Img
                    alt="avatar user"
                    className={cx('more-menu-icon')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/eca1df09cea0dc214ddd4698d0064c83~c5_300x300.webp?x-expires=1688785200&x-signature=19RPJqLvd9lNi4NzNEFSnONKRpk%3D"
                    // srcFallBack="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3dc715b5be60570e85def75117fc492a~c5_100x100.jpeg?x-expires=1689332400&x-signature=qg1xBcvIzuKp9ki2KwNgITm%2BvUw%3D"
                  />
                </div>
              }
              data={dataMenuItemLogin}
            />
          </Fragment>
        ) : (
          <Fragment>
            <Button
              onClick={() => {
                setLogin(true);
              }}
              primary>
              Đăng nhập
            </Button>

            <Menu
              element={
                <div className={cx('more-btn')}>
                  <MenuIcon width="20" height="20" viewBox="0 0 48 48" />
                </div>
              }
              data={dataMenuItemLogout}
            />
          </Fragment>
        )}
      </div>
    </header>
  );
}

export default Header;
