import { useEffect, useState } from "react";

// get initial mode if user has chosen before
export const getInitialMode = () => {
  const isReturningUser = "dark" in localStorage;
  const savedMode = JSON.parse(localStorage.getItem("dark"));

  // if mode was saved
  if (isReturningUser) {
    return savedMode;
  }

  return false;
};

export const useSetLocalStorage = ({ darkMode }) =>
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

export const useHome = () => {
  const [darkMode, setDarkMode] = useState(getInitialMode());
  useSetLocalStorage({ darkMode });

  return {
    darkMode,
    setDarkMode,
  };
};
