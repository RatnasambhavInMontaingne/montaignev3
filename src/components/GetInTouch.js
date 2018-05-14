import React from 'react'
import Footer from './Footer'

class GetInTouch extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>Get In Touch</h1>
        <Footer forwardLink='/' backwardLink='/working_with_us' />
      </React.Fragment>
    )
  }
}

export default GetInTouch
