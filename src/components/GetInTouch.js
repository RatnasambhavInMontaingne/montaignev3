import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Map from './Map'

const MainWrapper = styled.div`
  margin: 2em;
  border-radius: 3px;
  box-shadow: 0 20px 100px rgba(0,0,0,.2);
`

class GetInTouch extends React.Component {
  render () {
    return (
      <React.Fragment>
        <MainWrapper>
          <Map />
        </MainWrapper>
        <Footer forwardLink='/' backwardLink='/working_with_us' />
      </React.Fragment>
    )
  }
}

export default GetInTouch
