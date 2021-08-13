import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import HomePage from './pages/Home'
import ReportPage from './pages/Report'
import NotFoundPage from './pages/notFound'

import './scss/reset.scss'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/report">
            <ReportPage />
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
