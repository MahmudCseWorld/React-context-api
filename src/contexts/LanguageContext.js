import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider(props) {
  const [language, setLanguage] = useState("english"); 

  const languageChange = e => setLanguage(e.target.value); 
    return (
      <LanguageContext.Provider
        value={{ language, languageChange}}>
        {props.children}
      </LanguageContext.Provider>
    );
}

