import {useState} from 'react';
import { LanguageContext } from './LanguageContext';

function DisplayLanguage() {
    const text = {
        en: {
            TITLE: 'You selected "English"',
        },
        it: {
            TITLE: 'Hai selezionato "Italiano"',
        }
    }

    return <>
    <LanguageContext.Consumer>
        {language => {
            return(
                <h1>{text[language].TITLE}</h1>
            )
        }}
    </LanguageContext.Consumer>    
    </>
}

export default DisplayLanguage;