import React from 'react'
import ReactDOM from 'react-dom'
// eslint-disable-next-line import/no-unresolved
import App from 'Components/App'
import { I18nProvider } from '@lingui/react'
import catalogEn from './locales/en/messages.json'
import catalogRu from './locales/ru/messages.json'
import catalogFr from './locales/fr/messages.json'
import catalogEs from './locales/es/messages.json'

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
    </I18nProvider>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))

module.hot.accept()
