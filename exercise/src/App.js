import { useState } from "react";
import DisplayLanguage from "./components/DisplayLanguage";
import { LanguageContext } from "./components/LanguageContext";

function App() {
    const [state, setState] = useState({
        language: 'en',
    })

    const handleLanguageChange = (e) => {
        const language = e.target.value;
        setState(state => {
            return {
                ...state,
                language: language,
            }
        })
    }

    return <>
        <select value={state.language} onChange={handleLanguageChange}>
            <option value={'en'}>English</option>
            <option value={'it'}>Italiano</option>
        </select>
        <LanguageContext.Provider value={state.language}>
            <DisplayLanguage />
        </LanguageContext.Provider>
    </>
}

export default App;