import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Skillset from './components/Skillset'
import Achievements from './components/Achievements'
import OurStory from './components/OurStory'
import WorkingWithUs from './components/WorkingWithUs'
import GetInTouch from './components/GetInTouch'
import NotFound from './components/NotFound'

class App extends React.Component {
  navLinks = [
    {
      url: '/',
      component: Home,
      name: 'MONTAIGNE',
      exact: true
    },
    {
      url: '/skillset',
      component: Skillset,
      name: 'SKILLSET',
      exact: true
    },
    {
      url: '/achievements',
      component: Achievements,
      name: 'ACHIEVEMENTS',
      exact: true
    },
    {
      url: '/our_story',
      component: OurStory,
      name: 'OUR STORY',
      exact: true
    },
    {
      url: '/working_with_us',
      component: WorkingWithUs,
      name: 'WORKING WITH US',
      exact: true
    },
    {
      url: '/get_in_touch',
      component: GetInTouch,
      name: 'GET IN TOUCH',
      exact: true
    }
  ]

  render () {
    return (
      <Router>
        <React.Fragment>
          <Navbar navLinks={this.navLinks}/>
          <Switch>
            {this.navLinks.map((link, index) => (
              <Route exact={link.exact} path={link.url} component={link.component} key={index} />
            ))}
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default App
