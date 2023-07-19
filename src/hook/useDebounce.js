const { useState, useEffect } = require('react');

function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [value]);

  return debounced;
}

export default useDebounce;
