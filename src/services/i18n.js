import { get } from "svelte/store";
import {
  addMessages,
  locale,
  init,
  dictionary,
  _,
} from "svelte-i18n";

const MESSAGE_FILE_URL_TEMPLATE = "/lang/{locale}.json";

function setupI18n(options) {
  const { withLocale: locale_ } = options;

  // Initialize svelte-i18n
  init({ initialLocale: locale_ });

  // Don't re-download translation files
  if (!hasLoadedLocale(locale_)) {
    const messagesFileUrl = 
      MESSAGE_FILE_URL_TEMPLATE.replace(
        "{locale}",
        locale_,
      );

    // Download translation file for given locale/language
    return loadJson(messagesFileUrl).then((messages) => {
      // Configure svelte-i18n to use the locale
      addMessages(locale_, messages);

      locale.set(locale_);
    });
  }
}

function loadJson(url) {
  return fetch(url).then((response) => response.json());
}

function hasLoadedLocale(locale) {
  // If the svelte-i18n dictionary has an entry for the
  // locale, then the locale has already been added
  return get(dictionary)[locale];
}

// We expose the svelte-i18n _ store so that our app has
// a single API for i18n
export { _, setupI18n };