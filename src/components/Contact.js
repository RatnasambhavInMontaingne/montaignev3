import React from 'react'
import styled from 'styled-components'

const ContactWrapper = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;
`

const Header = styled.div`
  font-size: 1.5em;
  font-weight: 700;
  margin-bottom: 0.7em;
`

const StyledAnchor = styled.a`
  text-decoration: none;
  color: #fff;
`

const Section = styled.div`
  text-align: center;
  p {
    margin: 0.3em 0
  }
`

const HorizontalLine = styled.div`
  background-color: #008DE0; 
  width: 60%;
  height: 3px;
  margin: 0.7em 0;
`

const Contact = (props) => (
  <ContactWrapper>
    <Section>
      <Header>Email & Website</Header>
      <p>rohith@montaigne.co</p>
      <p>info@montaigne.co</p>
      <StyledAnchor href='www.montaigne.co'>www.montaigne.co</StyledAnchor>
    </Section>
    <HorizontalLine />
    <Section>
      <Header>Address</Header>
      <p>Plot no 39, Megha Hills, Madhapur,</p>
      <p>Andra Basti, Sri Sai Nagar, Madhapur,</p>
      <p>Hydrabad, Telangana 500081.</p>
    </Section>
    <HorizontalLine />
    <Section>
      <Header>Contact</Header>
      <p>+9140-01234567</p>
      <p>+91-9123444122</p>
    </Section>
  </ContactWrapper>
)

export default Contact
