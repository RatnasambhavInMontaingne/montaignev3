import React from 'react'
import Footer from './Footer'

class Skillset extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>Skillset</h1>
        <Footer forwardLink='/achievements' backwardLink='/' />
      </React.Fragment>
    )
  }
}

export default Skillset
