import React from 'react'
import ReactDOM from 'react-dom'
// eslint-disable-next-line import/no-unresolved
import App from 'Components/App'
import { I18nProvider } from '@lingui/react'
import catalogCs from './locales/ru/messages.js'

const catalogs = { cs: catalogCs }

const Index = () => {
  return (
    <I18nProvider catalogs={catalogs} language="ru">
      <App />
    </I18nProvider>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))

module.hot.accept()
