import React from 'react'
import Footer from './Footer'

class OurStory extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>Our Story</h1>
        <Footer forwardLink='/working_with_us' backwardLink='/achievements' />
      </React.Fragment>
    )
  }
}

export default OurStory
