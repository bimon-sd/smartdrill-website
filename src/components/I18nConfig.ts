"use client";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Static imports for all languages
import en from '../../public/locales/en/common.json';
import ru from '../../public/locales/ru/common.json';
import ar from '../../public/locales/ar/common.json';
import es from '../../public/locales/es/common.json';
import pt from '../../public/locales/pt/common.json';
import fr from '../../public/locales/fr/common.json';
import de from '../../public/locales/de/common.json';
import it from '../../public/locales/it/common.json';
import nl from '../../public/locales/nl/common.json';
import ja from '../../public/locales/ja/common.json';
import ko from '../../public/locales/ko/common.json';
import vi from '../../public/locales/vi/common.json';
import ms from '../../public/locales/ms/common.json';
import id from '../../public/locales/id/common.json';
import th from '../../public/locales/th/common.json';
import tl from '../../public/locales/tl/common.json';
import tr from '../../public/locales/tr/common.json';
import fa from '../../public/locales/fa/common.json';

const resources = {
  en: { translation: en },
  ru: { translation: ru },
  ar: { translation: ar },
  es: { translation: es },
  pt: { translation: pt },
  fr: { translation: fr },
  de: { translation: de },
  it: { translation: it },
  nl: { translation: nl },
  ja: { translation: ja },
  ko: { translation: ko },
  vi: { translation: vi },
  ms: { translation: ms },
  id: { translation: id },
  th: { translation: th },
  tl: { translation: tl },
  tr: { translation: tr },
  fa: { translation: fa },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
