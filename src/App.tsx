import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MainPage from './pages/main'
import ResultPage from './pages/result'
import NotFoundPage from './pages/notFound'

import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/:id">
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
