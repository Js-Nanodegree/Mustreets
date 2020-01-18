import React from 'react'
import ReactDOM from 'react-dom'
// eslint-disable-next-line import/no-unresolved
import App from 'Components/App'
import { I18nProvider } from '@lingui/react'

import catalogEn from 'Locales/en/messages.json'
import catalogRu from 'Locales/ru/messages.json'
import catalogFr from 'Locales/fr/messages.json'
import catalogEs from 'Locales/es/messages.json'
import WrapperRouter from 'Router'

const catalogs = {
  en: catalogEn,
  ru: catalogRu,
  fr: catalogFr,
  es: catalogEs,
}

const Index = () => {
  return (
    <I18nProvider language='en' catalogs={catalogs}>
      <App />
      <WrapperRouter />
    </I18nProvider>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))

module.hot.accept()
