import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Выполняем при изменении пути

  return null; 
}

export default ScrollToTop; 