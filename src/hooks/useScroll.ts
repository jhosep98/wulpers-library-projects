import { useEffect, useState, useCallback } from 'react';

const useScroll = (px?: number) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;

    if (offset > (px ?? 0)) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [px]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return { scrolled };
};

export default useScroll;
