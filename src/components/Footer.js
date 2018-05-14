import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import arrowRight from '../Images/arrow icon.png'

const ForwardArrow = styled.img`
  width: 75%; 
  filter: invert(100%);
`

const BackwardArrow = styled.img`
  width: 75%;
  transform: rotate(180deg);
  filter: invert(100%);
`

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.5em 0;
`

const SocialLinkWrapper = styled.div`
  display: flex;
  align-items: center;
`

const SocialLinks = styled.a`
  font-size: 1.1em;
  text-decoration: none;
  color: #000;
`

class Footer extends React.Component {
  render () {
    return (
      <FooterWrapper>
        <Link to={this.props.backwardLink}>
          <BackwardArrow src={arrowRight} alt='Back' />
        </Link>
        <SocialLinkWrapper>
          <SocialLinks href='#'>Fb</SocialLinks>
          <p>&nbsp;|&nbsp;</p>
          <SocialLinks href='#'>Li</SocialLinks>
          <p>&nbsp;|&nbsp;</p>
          <SocialLinks href='#'>Pi</SocialLinks>
          <p>&nbsp;|&nbsp;</p>
          <SocialLinks href='#'>In</SocialLinks>
        </SocialLinkWrapper>
        <Link to={this.props.forwardLink}>
          <ForwardArrow src={arrowRight} alt='Next' />
        </Link>
      </FooterWrapper>
    )
  }
}

export default Footer
