import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';
import { useCallback, useState } from 'react';

import HeaderMenu from './HeaderMenu';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItemWrapper from './MenuItemWrapper';

const cx = classNames.bind(styles);

function Menu({ hideOnClick = false, element, data }) {
  const [history, setHistory] = useState([data]);
  const current = history[history.length - 1];

  const handleSelectItem = useCallback((item) => {
    if (item.children) {
      setHistory((prev) => [...prev, item.children]);
    }
  }, []);
  return (
    <div>
      <HeadlessTippy
        // visible
        hideOnClick={hideOnClick}
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
                {current && <MenuItemWrapper data={current} handleSelectItem={handleSelectItem} />}
              </div>
            </PopperWrapper>
            <span className={cx('arrow')}></span>
          </div>
        )}>
        {element}
      </HeadlessTippy>
    </div>
  );
}

Menu.propTypes = {
  hideOnClick: PropTypes.bool,
  element: PropTypes.node.isRequired,
  data: PropTypes.array.isRequired
};

export default Menu;
