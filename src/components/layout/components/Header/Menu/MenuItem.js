import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick, className }) {
  const classNameM = cx('menu-item', {
    [className]: className,
    borderTop: data.border
  });
  return (
    <Button
      onClick={onClick}
      leftIcon={data.icon}
      otherComponent={data.otherComponent}
      className={classNameM}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
