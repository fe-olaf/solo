import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import MainPage from './pages/Main'
import ResultPage from './pages/Result'
import NotFoundPage from './pages/notFound'

import './scss/reset.scss'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/result">
            <ResultPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
