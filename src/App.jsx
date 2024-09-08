import React from 'react';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <div style={{justifyContent:'center'}}>
      <h1>{t('welcome_message')}</h1>
      
      <button onClick={() => changeLanguage('en')}> {t('change_language')} (English)</button>
      <button onClick={() => changeLanguage('hi')} style={{margin:'10px'}}>{t('change_language')} (हिन्दी)</button>
      </div>
      
    </div>
  );
};

export default App;