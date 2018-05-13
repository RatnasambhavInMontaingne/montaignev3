import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import TypedComponent from './TypedComponent'
import homeBG from '../Images/home-page-bg_low.jpg'
import logoWhite from '../Images/logo 512X512 white.png'
import arrowRight from '../Images/arrow icon.png'

const BGSlide = keyframes`
  from {
    background-position: 0 0
  }
  to {
    background-position: -15118px 0
  }
`

const HomeWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 40px);
  background-color: #000;
  background-image: url(${homeBG});
  background-size: cover;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${BGSlide} 200s linear forwards infinite;
`
const StyledText = styled.p`
  color: #fff;
  font-size: 1.2em;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
`

const LogoBig = styled.img`
  width: 400px;
`

const ArrowLink = styled(Link)`
  margin-top: 1em;
`

const ArrowImage = styled.img`
  width: 75%;
`

const strings = [
  'One Stop Shop For All Your Business Needs',
  '17,000 retweets in just a few hours',
  'I dont know why I typed this'
]

class Home extends React.Component {
  render () {
    return (
      <HomeWrapper>
        <StyledText>MEET</StyledText>
        <LogoBig src={logoWhite} alt='Montaigne Logo'/>
        <StyledText>
          <TypedComponent strings={strings} />
        </StyledText>
        <ArrowLink to='/skillset'>
          <ArrowImage src={arrowRight} alt='Next' />
        </ArrowLink>
      </HomeWrapper>
    )
  }
}

export default Home
