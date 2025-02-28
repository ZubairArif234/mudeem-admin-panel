import React, { useEffect } from 'react';
import { useGetSettings } from '../../hook/apis/setting/getSettings';

const DynamicFavicon = () => {
  const { faviconUrl, isLoading, isError } = useGetSettings();

  useEffect(() => {
    if (faviconUrl && !isLoading && !isError) {
      const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = faviconUrl;
      document.getElementsByTagName('head')[0].appendChild(link);
    }
  }, [faviconUrl, isLoading, isError]);

  return null;
};

export default DynamicFavicon;