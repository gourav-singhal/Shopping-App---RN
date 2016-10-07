import LocalizedString from 'react-native-localization';
import _ from 'lodash';
import en from './lang-en';
import fr from './lang-fr';
import {setLanguage} from '../util/helper';

const defaultLanguage = 'en-US';

let locale = new LocalizedString({
    "en-US": en,
    "fr": fr
});

setLanguage(locale);

export default locale;