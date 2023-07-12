import { useState } from 'react';
import Image from '~/assets/Image';

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

export default Img;
