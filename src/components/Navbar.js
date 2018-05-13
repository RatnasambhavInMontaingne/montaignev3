import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Nav = styled.nav`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  background: none;
`

const StyledNavLink = styled(NavLink)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  background-color: #fff;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1.1em;
  font-weight: 700;
`

const active = {
  color: '#fff',
  backgroundColor: '#000'
}

class Navbar extends React.Component {
  render () {
    return (
      <Nav>
        {this.props.navLinks.map((link, index) => (
          <StyledNavLink to={link.url} exact={link.exact} activeStyle={active} key={index}>
            {link.name}
          </StyledNavLink>
        ))}
      </Nav>
    )
  }
}

export default Navbar
