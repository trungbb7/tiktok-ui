import classNames from 'classnames/bind';
import styles from './ContentHomePageContainer.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';
import MenuShare from '../MenuShare';
import {
  HeartIcon,
  CommentIcon,
  ShareIcon,
  FavoriteIcon,
  PlayIcon,
  PauseIcon,
  FlagIcon,
  SpeakerIcon,
  MuteIcon
} from '~/assets/Icons';
import { useRef } from 'react';
const cx = classNames.bind(styles);

function VideoItem({ src, timeString, likesCount, commentsCount, sharesCount }) {
  const btnRef = useRef();
  const playRef = useRef();
  const pauseRef = useRef();
  const videoRef = useRef();
  const timerRef = useRef();
  const timeCircleRef = useRef();
  const soundControlProgressRef = useRef();
  const timeContainerRef = useRef();
  const speakerRef = useRef();
  const muteRef = useRef();
  const videoContainerRef = useRef();
  const soundWrapperRef = useRef();
  const soundCircleRef = useRef();

  const handleProgress = (type, progress, duration) => {
    const percent = progress / duration;
    if (type === 'time') {
      timeCircleRef.current.style.transform = `translateX(${progress}px)`;
      timeContainerRef.current.style.background = `linear-gradient(to right, #fff 0%, #fff ${
        percent * 100
      }%, rgba(255, 255, 255, 0.34) ${percent * 100}%, rgba(255, 255, 255, 0.34) 100%)`;
    } else if ((type = 'sound')) {
      soundCircleRef.current.style.transform = `translateY(-50%) translateX(${progress}px)`;
      soundControlProgressRef.current.style.background = `linear-gradient(
        to right,
        #fff 0%,
        #fff ${percent * 100}%,
        rgba(255, 255, 255, 0.34) ${percent * 100}%,
        rgba(255, 255, 255, 0.34) 100%
      )`;
    }
  };

  const handleTimeMouseDown = (e) => {
    e.preventDefault();
    const duration = videoRef.current.duration || 0;
    const width = timeContainerRef.current.offsetWidth;
    let current = e.nativeEvent.layerX - 10;
    current = current < 0 ? 0 : current > width ? width : current;

    let pos1 = e.clientX;

    document.onmousemove = (e) => {
      const min = -current;
      const max = width - current;
      const pos2 = e.clientX;
      let distance = pos2 - pos1;
      distance = distance <= max && distance >= min ? distance : 0;
      const newTime =
        current + distance <= width && current + distance >= 0 ? current + distance : current;
      const telePercent = newTime / width;
      handleProgress('time', newTime, width);
      videoRef.current.currentTime = Math.floor(duration * telePercent);
      pos1 = pos2;
      current = newTime;
    };

    document.onmouseup = (e) => {
      current = e.layerX - 10;
      current = current < 0 ? 0 : current > width ? width : current;
      const telePercent = current / width;
      handleProgress('time', current, width);
      videoRef.current.currentTime = Math.floor(duration * telePercent);
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };
  const handleSoundMouseDown = (e) => {
    e.preventDefault();
    const width = soundControlProgressRef.current.offsetWidth;
    let currentSound = width - (e.nativeEvent.layerY + 23);
    currentSound = currentSound < 0 ? 0 : currentSound > 48 ? 48 : currentSound;
    console.log('current sound: ' + currentSound);
    let pos1 = e.clientY;

    document.onmousemove = (e) => {
      const min = -currentSound;
      const max = width - currentSound;

      let pos2 = e.clientY;
      let distance = pos1 - pos2;
      distance = distance < min ? min : distance > max ? max : distance;
      let newSound = currentSound + distance;
      const soundPercent = newSound / width;
      handleProgress('sound', newSound, width);
      videoRef.current.volume = soundPercent;
      currentSound = newSound;
      pos1 = pos2;
    };
    document.onmouseup = (e) => {
      let newSound = currentSound;
      newSound = newSound < 0 ? 0 : newSound > 48 ? 48 : newSound;

      const soundPercent = newSound / width;
      handleProgress('sound', newSound, width);

      videoRef.current.volume = soundPercent;
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };
  const handlePlay = () => {
    videoRef.current.play();
    videoContainerRef.current.focus();
  };

  const formatTime = (time) => {
    const seconds = time % 60;
    const minutes = (time - seconds) / 60;
    const minuteDozens = Math.floor(minutes / 10);
    const minuteUnits = minutes - minuteDozens;
    const secondDozens = Math.floor(seconds / 10);
    const secondUnits = seconds - secondDozens * 10;
    return `${minuteDozens}${minuteUnits}:${secondDozens}${secondUnits}`;
  };

  const handleOnPlay = () => {
    playRef.current.style.display = 'none';
    pauseRef.current.style.display = 'block';
  };

  const handleOnPause = () => {
    pauseRef.current.style.display = 'none';
    playRef.current.style.display = 'block';
  };

  const handlePause = () => {
    videoContainerRef.current.focus();
    videoRef.current.pause();
  };

  const handleMute = () => {
    const currentVolume = videoRef.current.volume;
    const width = soundControlProgressRef.current.offsetWidth;
    videoRef.current.muted = true;
    speakerRef.current.style.display = 'none';
    muteRef.current.style.display = 'block';
    handleProgress('sound', currentVolume, width);
    videoContainerRef.current.focus();
  };
  const handleSpeak = () => {
    let currentVolume = videoRef.current.volume;
    if (currentVolume <= 0) {
      currentVolume = 0.3;
      videoRef.current.volume = currentVolume;
    }
    const width = soundControlProgressRef.current.offsetWidth;
    videoRef.current.muted = false;
    speakerRef.current.style.display = 'block';
    muteRef.current.style.display = 'none';
    handleProgress('sound', currentVolume * width, width);
    videoContainerRef.current.focus();
  };

  const onVolumeChange = () => {
    const currentVolume = videoRef.current.volume;
    if (currentVolume === 0 || videoRef.current.muted) {
      const width = soundControlProgressRef.current.offsetWidth;
      handleProgress('sound', currentVolume, width);
      speakerRef.current.style.display = 'none';
      muteRef.current.style.display = 'block';
    } else {
      speakerRef.current.style.display = 'block';
      muteRef.current.style.display = 'none';
    }
  };

  const onTimeUpdate = () => {
    const currentTime = Math.floor(videoRef.current.currentTime);
    const duration = Math.floor(videoRef.current.duration);
    const width = timeContainerRef.current.offsetWidth;

    timerRef.current.innerText = `${formatTime(currentTime)}/${formatTime(duration)}`;
    const telePercent = currentTime / duration;
    timeCircleRef.current.style.transform = `translateX(${Math.floor(telePercent * width)}px)`;
    timeContainerRef.current.style.background = `linear-gradient(to right, #fff 0%, #fff ${
      telePercent * 100
    }%, rgba(255, 255, 255, 0.34)  ${telePercent * 100}%, rgba(255, 255, 255, 0.34) 100%)`;
  };

  return (
    <div className={cx('video-wrapper')}>
      <div tabIndex={0} ref={videoContainerRef} className={cx('video-container')}>
        <video
          onPlay={handleOnPlay}
          onPause={handleOnPause}
          onTimeUpdate={onTimeUpdate}
          onVolumeChange={onVolumeChange}
          ref={videoRef}
          // controls
          src={src}
          // src="https://files.fullstack.edu.vn/f8-tiktok/videos/2560-64ba945a062fa.mp4"
          className={cx('video')}
        />
        <div className={cx('option-control')}>
          <div className={cx('report-wrapper')}>
            <FlagIcon className={cx('report-icon')} width="16" height="14" viewBox="0 0 48 48" />
            <span className={cx('report-title')}>Báo cáo</span>
          </div>
          <div className={cx('actionBar')}>
            <div className={cx('control-wrapper')}>
              <button ref={playRef} onClick={handlePlay} className={cx('play-icon')}>
                <PlayIcon width="20" height="20" viewBox="0 0 48 48" />
              </button>
              <button ref={pauseRef} onClick={handlePause} className={cx('pause-icon')}>
                <PauseIcon width="20" height="20" viewBox="0 0 48 48" />
              </button>
            </div>
            <div ref={soundWrapperRef} className={cx('sound-wrapper')}>
              <button ref={speakerRef} onClick={handleMute} className={cx('speaker-icon')}>
                <SpeakerIcon width="24" height="24" viewBox="0 0 48 48" />
              </button>
              <button onClick={handleSpeak} ref={muteRef} className={cx('mute-icon')}>
                <MuteIcon width="24" height="24" viewBox="0 0 48 48" />
              </button>
              <div className={cx('sound-control')}>
                <div
                  onMouseDown={handleSoundMouseDown}
                  ref={soundControlProgressRef}
                  className={cx('sound-control-progress')}>
                  <div ref={soundCircleRef} className={cx('sound-control-circle')}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('seekBar-wrapper')}>
            <div className={cx('seekBar')}>
              <div
                ref={timeContainerRef}
                onMouseDown={handleTimeMouseDown}
                className={cx('time-container')}>
                <div ref={timeCircleRef} className={cx('progress-circle')}></div>
              </div>
              <div ref={timerRef} className={cx('seekBar-timer')}>
                {timeString}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('action-wrapper')}>
        <div className={cx('love-btn')}>
          <div className={cx('icon-wrapper')}>
            <HeartIcon width="24" height="24" viewBox="0 0 24 24" />
          </div>
          <div className={cx('action-quantity')}>{likesCount}</div>
        </div>
        <div className={cx('comment-btn')}>
          <div className={cx('icon-wrapper')}>
            <CommentIcon width="24" height="24" viewBox="0 0 48 48" />
          </div>
          <div className={cx('action-quantity')}>{commentsCount}</div>
        </div>
        <div className={cx('favorite-btn')}>
          <div className={cx('icon-wrapper')}>
            <FavoriteIcon width="24" height="24" viewBox="0 0 24 24" />
          </div>
          <div className={cx('action-quantity')}>1192</div>
        </div>

        <HeadlessTippy
          placement="top"
          arrow={true}
          zIndex={0}
          popperOptions={{
            modifiers: [
              {
                name: 'flip',
                options: {
                  fallbackPlacements: []
                }
              }
            ]
          }}
          offset={[92, 4]}
          delay={[0, 300]}
          interactive={true}
          onHide={() => {
            btnRef.current.resetShareItem();
          }}
          // visible
          render={(attris) => <MenuShare ref={btnRef} />}>
          <div className={cx('share-btn')}>
            <div className={cx('icon-wrapper')}>
              <ShareIcon width="24" height="24" viewBox="0 0 20 20" />
            </div>
            <div className={cx('action-quantity')}>{sharesCount}</div>
          </div>
        </HeadlessTippy>
      </div>
    </div>
  );
}

export default VideoItem;
