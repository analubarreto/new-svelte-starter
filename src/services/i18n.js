// Add i18n configuration
import { dictionary, locale, _ } from 'svelte-i18n';

function setupI18n({ withLocale: _locale} = { withLocale: 'en' }) {
  dictionary.set({
    en: {
      'home': { 'exampleText': 'Just an example text to show i18n working' },
      'navbar': {
        'home': 'Home',
        'about': 'About',
        'Blog': 'Blog'
      }
    },
    pt: {
      'home': { 'exampleText': 'Só um texto de exemplo para mostrar o i18n funcionando' },
      'navbar': {
        'home': 'Início',
        'about': 'Sobre',
        'Blog': 'Blog'
      }
    },
    es: {
      'home': { 'exampleText': 'Solo un texto de ejemplo para mostrar i18n funcionando' },
      'navbar': {
        'home': 'Home',
        'about': 'Sobre',
        'Blog': 'Blog'
      }
    }
  });
  locale.set(_locale);
}

export {
  _,
  setupI18n
}