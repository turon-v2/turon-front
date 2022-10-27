import { useEffect, useState, createContext } from "react";

const LangContext = createContext()

function LangProvider({children}){
    
    let [lang, setLang] = useState(window.localStorage.getItem('turon_site_lang') || 'uz')    
    
    useEffect(()=>{
        window.localStorage.setItem('turon_sayte_lang', lang)
    }, [lang])

    return(
        <LangContext.Provider value={{lang, setLang}}>{children}</LangContext.Provider>
    )
}

export {LangContext, LangProvider}