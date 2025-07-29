import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  // Get the current location's pathname from the router
  const { pathname } = useLocation();

  // This effect will run every time the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component is a utility and does not render any visible UI
  return null;
};