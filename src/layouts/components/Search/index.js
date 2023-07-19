import classNames from 'classnames/bind';
import { Fragment, useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';

import SearchResultItem from '../SearchResultItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon, LoadingIcon } from '~/assets/Icons';
import { ClearIcon } from '~/assets/Icons';
import styles from './Search.module.scss';
import { useDebounce } from '~/hook';

const cx = classNames.bind(styles);

function Search() {
  const [dataAccountItems, setDataAccountItems] = useState([]);
  const [value, setValue] = useState('');
  const [focus, setFocus] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  const searchBtnRef = useRef();
  const searchRef = useRef();
  const clearRef = useRef();
  const loadingRef = useRef();

  const debounce = useDebounce(value, 500);
  const handleInput = () => {
    let newValue = inputRef.current.value.trim();
    setValue((pre) => {
      if (pre.length > 0 || newValue.length > 0) {
        return inputRef.current.value;
      } else {
        return '';
      }
    });
  };
  const handleFocus = () => {
    setFocus(true);
    searchRef.current.classList.add(cx('focus'));
  };

  const handleBlur = (e) => {
    searchRef.current.classList.remove(cx('focus'));
    if (!(e.relatedTarget && e.relatedTarget.dataset.cp === 'true')) {
      setFocus(false);
    }
  };

  const handleClear = () => {
    setValue('');
    inputRef.current.focus();
  };

  useEffect(() => {
    let url = `https://www.tiktok.com/api/search/general/preview/?aid=1988&app_language=vi&app_name=tiktok_web&browser_language=vi-VN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36&channel=tiktok_web&cookie_enabled=true&device_id=7248603869680797185&device_platform=web_pc&focus_state=true&from_page=fyp&history_len=2&is_fullscreen=false&is_page_visible=true&keyword=${encodeURIComponent(
      debounce
    )}&os=windows&priority_region=&referer=&region=VN&screen_height=864&screen_width=1536&tz_name=Asia/Bangkok&webcast_language=vi-VN`;
    let objdata = 'sug_list';
    if (debounce.length === 0) {
      objdata = 'data';
      url =
        'https://www.tiktok.com/api/search/suggest/guide/?aid=1988&app_language=vi-VN&app_name=tiktok_web&browser_language=vi-VN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36&channel=tiktok_web&cookie_enabled=true&device_id=7248603869680797185&device_platform=web_pc&focus_state=true&from_group_id=7248630985003175174&from_page=fyp&history_len=2&history_list_v2=%255B%255D&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=&referer=&region=VN&req_source=web_blank_page&screen_height=864&screen_width=1536&tz_name=Asia/Bangkok&webcast_language=vi-VN';
    }
    clearRef.current.style.display = 'none';
    loadingRef.current.style.display = 'block';
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setDataAccountItems(res[objdata]);
        setLoading(false);
        if (debounce.length > 0) {
          clearRef.current.style.display = 'block';
          searchRef.current.classList.add(cx('hover'));
        }
        loadingRef.current.style.display = 'none';
      })
      .catch((err) => {
        console.error(err);
        setDataAccountItems([]);
      });

    // eslint-disable-next-line
  }, [debounce]);

  useEffect(() => {
    console.log('counter');
    if (searchRef.current) {
      if (value.length > 0) {
        searchRef.current.classList.add(cx('hover'));
      } else {
        searchRef.current.classList.remove(cx('hover'));
      }
    }
  }, [value]);

  return (
    <div>
      <HeadlessTippy
        visible={focus && !loading}
        placement="bottom"
        interactive={true}
        render={(attris) => (
          <div className={cx('search-results')} {...attris}>
            <PopperWrapper className={cx('popper-wrapper')}>
              {value.length > 0 ? (
                <Fragment>
                  {/* <div className={cx('accountLabel')}>Tài khoản</div> */}
                  {dataAccountItems.map((accountItem, index) => {
                    if (accountItem.word) {
                      return '';
                    }
                    const firstAccountIndex = dataAccountItems.findIndex((val) => {
                      return val.extra_info.rich_sug_avatar_uri;
                    });
                    if (index === firstAccountIndex) {
                      accountItem.isFirst = true;
                    }

                    return (
                      <Fragment key={index}>
                        {accountItem.isFirst && <div className={cx('accountLabel')}>Tài khoản</div>}
                        <SearchResultItem
                          type="general"
                          key={index}
                          image={accountItem.extra_info.rich_sug_avatar_uri}
                          userName={accountItem.extra_info.unique_id}
                          name={accountItem.extra_info.nickname}
                          isVerified={accountItem.extra_info.is_verified}
                          content={accountItem.content}
                        />
                      </Fragment>
                    );
                  })}
                </Fragment>
              ) : (
                <Fragment>
                  <p className={cx('guessLabel')}>Bạn có thể thích</p>
                  {dataAccountItems.map((data, index) => {
                    return (
                      <SearchResultItem
                        type="guess"
                        key={index}
                        // icon={data.icon}
                        text={data.word}
                        wordType={data.word_type}
                      />
                    );
                  })}
                </Fragment>
              )}
            </PopperWrapper>
          </div>
        )}>
        <div ref={searchRef} className={cx('search')}>
          <input
            value={value}
            ref={inputRef}
            type="text"
            size="1"
            className={cx('searchField')}
            placeholder="Tìm kiếm"
            onInput={handleInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <div ref={clearRef} className={cx('clear')} onClick={handleClear}>
            <ClearIcon width="16" height="16" viewBox="0 0 48 48" />
          </div>
          <div ref={loadingRef} className={cx('loading')}>
            <LoadingIcon
              className={cx('loading-icon')}
              width="16"
              height="16"
              viewBox="0 0 48 48"
            />
          </div>
          <button ref={searchBtnRef} className={cx('search-btn')}>
            <SearchIcon width="24" height="24" viewBox="0 0 48 48" />
          </button>
          <span className={cx('spliter')}></span>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
