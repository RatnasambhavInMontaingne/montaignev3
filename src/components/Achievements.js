import React from 'react'
import Footer from './Footer'

class Achievements extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>Achievements</h1>
        <Footer forwardLink='/our_story' backwardLink='/skillset' />
      </React.Fragment>
    )
  }
}

export default Achievements
