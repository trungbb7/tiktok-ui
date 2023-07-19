import { memo } from 'react';
import MenuItem from '../MenuItem';

function MenuItemWrapper({ data, handleSelectItem }) {
  return data.map((item, index) => {
    return (
      <MenuItem
        className={item.type === 'language' && 'language-style'}
        key={index}
        data={item}
        onClick={() => {
          handleSelectItem(item);
        }}
      />
    );
  });
}

export default memo(MenuItemWrapper);
