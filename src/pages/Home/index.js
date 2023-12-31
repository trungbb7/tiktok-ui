import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ContentHomePageContainer from './components/ContentHomePageContainer';
const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('home-page')}>
      <ContentHomePageContainer />
    </div>
  );
}
export default Home;
