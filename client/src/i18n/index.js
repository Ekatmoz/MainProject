import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en/common.json';
import hu from './locales/hu/common.json';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: { translation: en },
			hu: { translation: hu },
		},
		fallbackLng: 'hu',
		supportedLngs: ['en', 'hu'],
		interpolation: { escapeValue: false },
		detection: {
			order: ['localStorage', 'navigator'],
			caches: ['localStorage'],
			lookupLocalStorage: 'i18nextLng',
		},
	});

export default i18n;
