import React from 'react'
import ReactDOM from 'react-dom'
// eslint-disable-next-line import/no-unresolved
import App from 'Components/App'
import { I18nProvider } from '@lingui/react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom'
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

const RouterPage = () => {
  return (
    <Router>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/topics'>topics</Link>
    </Router>
  )
}

const WrapperRouter = () => {
  return (
    <Router>
      <RouterPage />
      <Switch>
        <Route path='/'>
          <About />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/topics'>
          <About />
        </Route>
        <Route>
          <About />
        </Route>
      </Switch>
    </Router>
  )
}

const About = () => {
  return <div>Slava</div>
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
