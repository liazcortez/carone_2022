const useStorage = () => {
  const storageType = (type) => `${type ?? 'local'}Storage`;

  const isBrowser = (() => typeof window !== 'undefined')();

  const getItem = (key, type) => {
    return isBrowser && window?.[storageType(type)]?.[key] ? JSON.parse(window[storageType(type)][key]) : false;
  };

  const setItem = (key, value, type) => {
    if (isBrowser) {
      window[storageType(type)].setItem(key,JSON.stringify(value));
      return true;
    }

    return false;
  };

  const removeItem = (key, type) => {
    window[storageType(type)].removeItem(key);
  };

  return {
    getItem,
    setItem,
    removeItem,
  };
};

export default useStorage;