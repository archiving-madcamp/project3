import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import About from './pages/about'
import Contactus from './pages/contact-us'
import Service from './pages/service'
import Signup from './pages/sign-up'
import Detail from './pages/detail'


function App(){
return (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Service} />
      <Route path="/sign-up" component={Signup} />
      <Route path="/contact-us" component={Contactus} />
      <Route path="/service/:id" component={Detail} />
    </Switch>
  </Router>
)
}

export default App