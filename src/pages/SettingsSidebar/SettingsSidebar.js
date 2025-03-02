import React, { useState, useEffect, useRef } from 'react';
import './SettingsSidebar.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../languages/languageSlice';

const SettingsSidebar = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.language);
  const settingsRef = useRef(null); // Ref for the settings container

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const savedLanguage = localStorage.getItem('language') || 'en';

    setIsDarkMode(savedDarkMode);
    dispatch(setLanguage(savedLanguage));

    if (savedDarkMode) {
      document.body.classList.add('dark-mode');
    }
  }, [dispatch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setIsSettingsOpen(false);
      }
    };

    if (isSettingsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSettingsOpen]);

  const toggleSettings = () => {
    setIsSettingsOpen((prev) => !prev);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.body.classList.toggle('dark-mode', newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
  };

  const handleLanguageChange = (lang) => {
    dispatch(setLanguage(lang));
    localStorage.setItem('language', lang);
  };

  return (
    <div className="settings-container" ref={settingsRef}>
      <img
        onClick={toggleSettings}
        className="settings-icon"
        src="/pics/param.gif"
        alt="Settings Icon"
        id="param"
      />
      <div className={`settings-options ${isSettingsOpen ? 'show' : ''}`}>
        <div className="option-icon" onClick={toggleDarkMode}>
          <img
            src={isDarkMode ? '/pics/moon.gif' : '/pics/sun.gif'}
            id="sun"
            alt={isDarkMode ? 'Moon Icon' : 'Sun Icon'}
          />
        </div>
        <div
          className={`option-icon ${language === 'en' ? 'active-lang' : ''}`}
          onClick={() => handleLanguageChange('en')}
        >
          <img src="pics/en.png" className="lng" alt="English" />
        </div>
        <div
          className={`option-icon ${language === 'fr' ? 'active-lang' : ''}`}
          onClick={() => handleLanguageChange('fr')}
        >
          <img src="pics/fr.png" className="lng" alt="French" />
        </div>
        <div
          className={`option-icon ${language === 'es' ? 'active-lang' : ''}`}
          onClick={() => handleLanguageChange('es')}
        >
          <img src="pics/esp.png" className="lng" alt="Spanish" />
        </div>
      </div>
    </div>
  );
};

export default SettingsSidebar; 
