import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Map from './Map'
import Contact from './Contact'
import GetInTouchForm from './GetInTouchForm'
import BlogComponent from './BlogComponent'

const MainWrapper = styled.div`
  margin: 2em;
  border-radius: 3px;
  box-shadow: 0 20px 100px rgba(0,0,0,.2);
`

const ContactAndFormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: #34215C;
  padding: 2em 0
`

const HorizontalLine = styled.div`
  width: 3px;
  background-color: #008DE0;
`

class GetInTouch extends React.Component {
  render () {
    return (
      <React.Fragment>
        <MainWrapper>
          <Map />
          <ContactAndFormWrapper>
            <Contact />
            <HorizontalLine />
            <GetInTouchForm />
          </ContactAndFormWrapper>
          <BlogComponent />
        </MainWrapper>
        <Footer forwardLink='/' backwardLink='/working_with_us' />
      </React.Fragment>
    )
  }
}

export default GetInTouch
