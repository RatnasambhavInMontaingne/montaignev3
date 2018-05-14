import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'

const SkillsetWrapper = styled.div`
  margin: 2em;
  border-radius: 3px;
  box-shadow: 0 20px 100px rgba(0,0,0,.2);
  display: flex;
  height: 83vh;
`

const MainContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #DC5555;
  width: 80%;
  padding: 3em;
`

const MainContentLeft = styled.div`
  display: grid;
  width: 45%;
  height: 100%;
  background-color: #E9E9E9;
`

const MainContentRight = styled.div`
  font-size: 1.2em;
  width: 40%;
  color: #fff;
`

const Header = styled.div`
  font-size: 1.2em;
  font-weight: 700;
  border-bottom: 1px solid #fff;
  padding-bottom: 0.3em;
  margin-bottom: 0.3em;
  width: 100%;
`

const Sidebar = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SidebarItem = styled.button`
  background: none;
  border: none;
  width: 60%;
  border-left: 4px solid #DC5555;
  font-size: 1.2em;
  text-align: left;
  margin: 1em 0;
  padding: 0.3em 0 0.3em 1em;
`

class Skillset extends React.Component {
  render () {
    return (
      <React.Fragment>
        <SkillsetWrapper>
          <MainContent>
            <MainContentLeft />
            <MainContentRight>
              <Header>Lorem Ipsum</Header>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <br />
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </MainContentRight>
          </MainContent>
          <Sidebar>
            <SidebarItem>Incubator</SidebarItem>
            <SidebarItem>Creative Designing</SidebarItem>
            <SidebarItem>Product Marketing</SidebarItem>
            <SidebarItem>UI/UX</SidebarItem>
            <SidebarItem>Predictive Analytics</SidebarItem>
          </Sidebar>
        </SkillsetWrapper>
        <Footer forwardLink='/achievements' backwardLink='/' />
      </React.Fragment>
    )
  }
}

export default Skillset
