import { Fragment } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/themes/light.css';

import style from './Header.module.scss';
import images from '~/assets/images.js';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from './Menu';
import { dataMenuItemLogout, dataMenuItemLogin } from '~/assets/dataMenu';
import { PlusIcon, MessageIcon, InboxIcon, SearchIcon } from '~/assets/Icons';
import Img from '~/components/Img';
const cx = classNames.bind(style);
let isLoggin = false;

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('logo')}>
        <img src={images.logo.default} alt="logo" />
      </div>
      <HeadlessTippy
        // visible
        placement="bottom"
        interactive={true}
        render={(attris) => (
          <div className={cx('search-results')} {...attris}>
            <PopperWrapper>
              <p className={cx('accountLabel')}>Tài khoản</p>
              <AccountItem
                image="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/5fbb0273854ff1f24ea8a6008cebefd9~c5_300x300.webp?x-expires=1688806800&x-signature=HVI1VRkz8ucJSA6jAfSitKhglLs%3D"
                userName="quan.cartoon"
                name="TRUNG QUÂN ☔"
                isVerified={true}
              />
              <AccountItem
                image="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/eca1df09cea0dc214ddd4698d0064c83~c5_300x300.webp?x-expires=1688785200&x-signature=19RPJqLvd9lNi4NzNEFSnONKRpk%3D"
                userName="trungdapchaii"
                name="Minh Trung"
                isVerified={true}
              />
              <AccountItem
                image="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/f71697771895605b5c594bfd86b659fb~c5_100x100.jpeg?x-expires=1688810400&x-signature=kijlexrU20OI%2FipcFav6W0aOFPs%3D"
                userName="hoanganhquan_blv"
                name="BLV Anh Quân"
                isVerified={false}
              />
              <AccountItem
                image="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/00405ae2a37cf3d486d531af2fc51ff6~c5_300x300.webp?x-expires=1688806800&x-signature=xfdyMZhbCMy888yEeJPsJ%2FhVCf0%3D"
                userName="trungruoi93"
                name="Trung Ruoi"
                isVerified={true}
              />
              <AccountItem
                image="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8d687a25dbe820e3ed653c87c66faa12~c5_100x100.jpeg?x-expires=1688810400&x-signature=xX96NpBjRDUSfR7xBXIX1ocTbwc%3D"
                userName="brunofernades"
                name="Bruno Fernandes"
                isVerified={true}
              />

              <AccountItem
                image="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/d97a5f2c438f7ab76be3f70af053c6a4~c5_300x300.webp?x-expires=1688806800&x-signature=I%2F3VPafS9k5uT4b2xHzlZjJzvLc%3D"
                userName="gopduoi18"
                name="Trung Apple 🍎"
                isVerified={false}
              />
            </PopperWrapper>
          </div>
        )}>
        <div className={cx('search')}>
          <input type="text" size="1" className={cx('searchField')} placeholder="Tìm kiếm" />
          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <button className={cx('loading')}>
            <FontAwesomeIcon icon={faSpinner} />
          </button>
          <button className={cx('search-btn')}>
            <SearchIcon width="24" height="24" viewBox="0 0 48 48" />
          </button>
          <span className={cx('spliter')}></span>
        </div>
      </HeadlessTippy>
      <div className={cx('action')}>
        <Button
          outline
          leftIcon={<PlusIcon width="20" height="20" viewBox="0 0 16 16" />}
          onClick={() => {
            alert('Trung dap chai');
          }}>
          Tải lên
        </Button>
        {isLoggin ? (
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
            <Button href="https://fullstack.edu.vn/" target="_blank" primary>
              Đăng nhập
            </Button>

            <Menu
              element={
                <button className={cx('more-btn')}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
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
