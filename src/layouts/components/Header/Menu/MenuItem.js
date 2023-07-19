import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';
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
      {data.title ? data.title : `${data.nativeName} (${data.name})`}
    </Button>
  );
}

MenuItem.prototype = {
  data: PropTypes.object,
  onClick: PropTypes.func,
  className: PropTypes.string
};
export default MenuItem;
