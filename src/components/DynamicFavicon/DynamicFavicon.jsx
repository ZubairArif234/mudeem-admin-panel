import React, { useEffect, useState } from 'react';

const DynamicFavicon = () => {
  const [faviconUrl, setFaviconUrl] = useState(null);

  useEffect(() => {
    const storedSettings = localStorage.getItem("settings");
    if (storedSettings) {
      const parsedSettings = JSON.parse(storedSettings);
      setFaviconUrl(parsedSettings?.favIcon);
    }
  }, []);

  useEffect(() => {
    if (faviconUrl) {
      let link = document.querySelector("link[rel*='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'shortcut icon';
        document.head.appendChild(link);
      }
      link.type = 'image/x-icon';
      link.href = faviconUrl;
    }
  }, [faviconUrl]);

  return null;
};

export default DynamicFavicon;
