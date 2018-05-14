import React from 'react'
import styled from 'styled-components'
import blogBG from '../Images/yellow bg.jpg'
import logoBlack from '../Images/logo 512X512 black.png'

const BlogWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('${blogBG}');
`

const BlogLinks = styled.div`
  width: 100%;
  margin: 2em 0;
  display: flex;
  margin-top: 5em;
  flex-wrap: wrap;
  justify-content: space-around;
`

const BlogLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.2em;
  height: 300px;
  width: 320px;
  background-image: url('https://source.unsplash.com/random/800x600');
  background-size: cover;
  span {
    background-color: #000;
    padding: 0.3em;
  }
`

const NewsletterForm = styled.form`
  width: 100%;
  margin: 2em 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  margin: 2em 0;
  p {
    font-size: 1.1em;
  }
`

const NewsletterInput = styled.input`
  background-color: #fff;
  border: none;
  border-radius: 3px;
  width: 500px;
  min-width: 300px;
  text-align: center;
  color: #000;
  font-size: 1.1em;
  padding: 0.5em;
  margin: 0 2em;
`

const NewsletterSubmit = styled.input`
  background-color: #008DE0;
  border: none;
  border-radius: 3px;
  color: #fff;
  font-size: 1.1em;
  padding: 0.5em;
`

const BlogHorizontalLine = styled.div`
  background-color: #000;
  width: 90%;
  height: 2px;
  margin: 2em 0;
`

const BlogFooter = styled.div`
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2em 0;
`

const LogoSmall = styled.img`
  width: 60px;
  height: 60px;
`

class BlogComponent extends React.Component {
  render () {
    return (
      <BlogWrapper>
        <BlogLinks>
          <BlogLink>
            <span>Blog Post Title</span>
          </BlogLink>
          <BlogLink>
            <span>Blog Post Title</span>
          </BlogLink>
          <BlogLink>
            <span>Blog Post Title</span>
          </BlogLink>
        </BlogLinks>
        <NewsletterForm>
          <p>Subscribe to Us</p>
          <NewsletterInput type='email' name='newsletter_email' placeholder='Enter your Email' />
          <NewsletterSubmit type='submit' value='Submit' />
        </NewsletterForm>
        <BlogHorizontalLine />
        <BlogFooter>
          DESIGNED AND DEVELOPED BY 
          <LogoSmall src={logoBlack} />
           LABS
        </BlogFooter>
      </BlogWrapper>
    )
  }
}

export default BlogComponent
