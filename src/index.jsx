import React from 'react'
import ReactDOM from 'react-dom'
// eslint-disable-next-line import/no-unresolved
// import App from 'Components/App'
import { I18nProvider } from '@lingui/react'

import catalogEn from 'Locales/en/messages.json'
import catalogRu from 'Locales/ru/messages.json'
import catalogFr from 'Locales/fr/messages.json'
import catalogEs from 'Locales/es/messages.json'
import Provider from 'redhooks'
import { createGlobalStyle } from 'styled-components'
import WrapperRouter from './Router'
import { store } from './Redux'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Notable');
  body {
    font-family: 'Notable', sans-serif;
  }
`

const catalogs = {
  en: catalogEn,
  ru: catalogRu,
  fr: catalogFr,
  es: catalogEs,
}

const Index = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <I18nProvider language='en' catalogs={catalogs}>
        <WrapperRouter />
      </I18nProvider>
    </Provider>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))

module.hot.accept()
