import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import NavBar from './components/navbar'

function Home () {
  return <h2>Home</h2>
}

function Profile () {
  return <h2>Profile</h2>
}

function Stores () {
  return <h2>Stores</h2>
}

class Routing extends React.Component {
  render () {
    return (
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/store" component={Stores} />
      </Router>
    )
  }
}

export default Routing