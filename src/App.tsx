import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import ResultPage from './pages/result'
import NotFoundPage from './pages/notFound'

import './scss/reset.scss'

function App() {
  return (
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
  )
}

export default App
