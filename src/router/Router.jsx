import React, { createContext, useContext, useState, useEffect } from 'react';

const RouterContext = createContext({
  currentPath: '/',
  navigate: () => {},
});

export const useRouter = () => useContext(RouterContext);

export const RouterProvider = ({ children }) => {
  const getNormalizedPath = () => {
    const path = window.location.pathname;
    if (path.length > 1 && path.endsWith('/')) {
      return path.slice(0, -1);
    }
    return path || '/';
  };

  const [currentPath, setCurrentPath] = useState(getNormalizedPath);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getNormalizedPath());
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};
