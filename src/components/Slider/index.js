import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

function Slider({ className = '', min, max, step }) {
  const classNameO = cx('slider');

  return (
    <div className={`${classNameO} ${className}`}>
      <input className={cx('input')} type="range" min={min || 0} max={max || 10} step={step || 1} />
    </div>
  );
}

export default Slider;
