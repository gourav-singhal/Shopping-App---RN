
export function setLanguage(locale) 
{
    //get the array of available languages
    const languages = locale.getAvailableLanguages();
    //get device language
    const language = locale.getInterfaceLanguage();

    const setLang = _.indexOf(languages, language) >= 0 ? language : defaultLanguage;
    // set language
    locale.setLanguage(setLang);
}