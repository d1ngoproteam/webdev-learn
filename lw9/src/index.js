import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import App from './containers/App/App'
import Reviews from './containers/ReviewsPage/ReviewsPage'
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={ App }/>
      <Route exact path='/reviews/:id' component={ Reviews }/>
    </Switch>
  </BrowserRouter>, 
  document.getElementById('root')
)

registerServiceWorker()
