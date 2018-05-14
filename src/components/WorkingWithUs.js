import React from 'react'
import Footer from './Footer'

class WorkingWithUs extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>Working With Us</h1>
        <Footer forwardLink='/get_in_touch' backwardLink='/our_story' />
      </React.Fragment>
    )
  }
}

export default WorkingWithUs
