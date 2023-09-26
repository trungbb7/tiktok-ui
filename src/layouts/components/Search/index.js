import classNames from 'classnames/bind';
import { Fragment, useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';

import SearchResultItem from '../SearchResultItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon, LoadingIcon } from '~/assets/Icons';
import { ClearIcon } from '~/assets/Icons';
import styles from './Search.module.scss';
import { useDebounce } from '~/hook';
import { searchService, searchGuessService } from '~/services';

const cx = classNames.bind(styles);

function Search() {
  const [dataAccountItems, setDataAccountItems] = useState([]);
  const [dataGuessItems, setDataGuessItems] = useState([]);
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
    (async function () {
      setFocus(true);
      searchRef.current.classList.add(cx('focus'));
      const result = await searchGuessService();
      setDataGuessItems(result);
    })();
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
    if (debounce.length > 0) {
      (async function () {
        clearRef.current.style.display = 'none';
        loadingRef.current.style.display = 'block';
        setLoading(true);
        const result = await searchService(debounce);
        setDataAccountItems(result);
        setLoading(false);
        clearRef.current.style.display = 'block';
        loadingRef.current.style.display = 'none';
        searchRef.current.classList.add(cx('hover'));
      })();
    }

    // eslint-disable-next-line
  }, [debounce]);

  useEffect(() => {
    if (searchRef.current) {
      if (value.length > 0) {
        searchRef.current.classList.add(cx('hover'));
      } else {
        (async function () {
          searchRef.current.classList.remove(cx('hover'));
          clearRef.current.style.display = 'none';
          let result = await searchGuessService();

          setDataGuessItems(result);
        })();
      }
    }
  }, [value]);

  return (
    <div>
      <HeadlessTippy
        visible={(value === 0 || !loading) && focus}
        placement="bottom"
        interactive={true}
        render={(attris) => (
          <div className={cx('search-results')} {...attris}>
            <PopperWrapper className={cx('popper-wrapper')}>
              {value.length > 0 ? (
                <Fragment>
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
                  <SearchResultItem content={`Xem tất cả kết quả dành cho "${debounce}"`} />
                </Fragment>
              ) : (
                <Fragment>
                  <p className={cx('guessLabel')}>Bạn có thể thích</p>
                  {dataGuessItems.map((data, index) => {
                    return (
                      <SearchResultItem
                        type="guess"
                        key={index}
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
