export const i18n = {

  locales: [
    {
      code: 'en',
      language: 'en',
      N: 'English',
    },
    {
      code: 'ru',
      language: 'ru',
      N: 'Русский',
    },
    {
      code: 'he',
      language: 'he',
      N: 'עברית',
      dir: 'rtl',
    },
  ], // used in URL path prefix
  strategy: 'prefix',
  defaultLocale: 'en',

  vueI18n: './configs/i18n.config.ts',

  detectBrowserLanguage: {
    useCookie: true,
    // alwaysRedirect: true,
    cookieKey: 'i18n_redirected',
    redirectOn: 'root',
  }
}