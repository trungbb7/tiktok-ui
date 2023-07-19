import { useState } from 'react';
import Image from '~/assets/Image';
import PropTypes from 'prop-types';

function Img({ alt, src, srcFallBack, ...props }) {
  const [fallBack, setFallback] = useState('');
  const handleError = () => {
    if (srcFallBack) {
      setFallback(srcFallBack);
    } else {
      setFallback(Image.notFound);
    }
  };
  return <img alt={alt} src={fallBack || src} {...props} onError={handleError} />;
}

Img.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  fallBack: PropTypes.string
};

export default Img;
