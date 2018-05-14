import React from 'react'
import styled from 'styled-components'

const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  width: 60%;
`

const FormSection = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Header = styled.p`
  color: #fff;
  font-size: 1.5em;
  font-weight: 700;
`

const StyledInput = styled.input`
  width: 45%;
  min-width: 300px;
  margin: 1em 0;
  background: none;
  border: none;
  border-bottom: 2px solid #fff;
  transition: border-bottom 0.25s linear;
  font-size: 1.2em;
  color: #fff;
  ::placeholder {
    color: #fff
  }
`

const StyledSelect = styled.select`
  width: 70%;
  background: none;
  border: none;
  border-bottom: 2px solid #fff;
  font-size: 1.2em;
  color: #fff;
`

const StyledOption = styled.option`
  background: #34215C;
  margin: 1em 0;
  border: none;
  color: #fff;
`

const StyledTextArea = styled.textarea`
  background: none;
  margin: 1em 0;
  border: 2px solid #fff;
  color: #000;
  font-size: 1.2em;
  width: 70%;
`

const StyledSubmit = styled.input`
  background-color: #008DE0;
  border: none;
  border-radius: 4px;
  font-size: 1.2em;
  padding: 0.5em;
  color: #fff;
`

class GetInTouchForm extends React.Component {
  onSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted!")
  }

  render () {
    return (
      <FormWrapper>
        <Header>Get In Touch</Header>
        <FormSection>
          <StyledInput type='text' name='name' placeholder='Enter you Name' required />
          <StyledInput type='text' name='contact' placeholder='Enter you Contact Number' required />
        </FormSection>
        <FormSection>
          <StyledInput type='text' name='organization' placeholder='Enter you Organization' required />
          <StyledInput type='email' name='email' placeholder='Enter you Business Email' required />
        </FormSection>
        <FormSection>
          <StyledSelect name='Subject' required>
            <StyledOption value='' default>Select an Option</StyledOption>
            <StyledOption value='Incubation'>Incubation</StyledOption>
            <StyledOption value='Creative Designing'>Creative Designing</StyledOption>
            <StyledOption value='Marketing'>Marketing</StyledOption>
            <StyledOption value='Predctive Analytics'>Predctive Analytics</StyledOption>
          </StyledSelect>
        </FormSection>
        <FormSection>
          <StyledTextArea rows='6' cols='5' placeholder='Enter your Message' />
        </FormSection>
        <FormSection>
          <StyledSubmit type='submit' value='Submit' onSubmit={this.onSubmit}/>
        </FormSection>
      </FormWrapper>
    )
  }
}

export default GetInTouchForm
