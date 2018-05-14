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
  width: 90%;
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
  margin: 1.5em 0;
  background: none;
  border: none;
  border-bottom: 1px solid #fff;
  transition: border-bottom 0.25s linear;
  font-size: 1.2em;
  color: #fff;
  ::placeholder {
    color: #fff
  }
`

const StyledSelect = styled.select`
  width: 95%;
  background: none;
  border: none;
  border-bottom: 1px solid #fff;
  font-size: 1.2em;
  margin: 1.5em 0;
  color: #fff;
`

const StyledOption = styled.option`
  background: #34215C;
  margin: 2em 0;
  border: none;
  color: #fff;
`

const StyledTextArea = styled.textarea`
  width: calc(93% - 1em);
  background: none;
  margin: 1.5em 0;
  padding: 1em;
  border: 1px solid #fff;
  color: #000;
  font-size: 1.2em;
`

const StyledSubmit = styled.input`
  width: 70%;
  background-color: #008DE0;
  border: none;
  margin: 1.5em 0;
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
          <StyledTextArea rows='4' cols='5' placeholder='Enter your Message' />
        </FormSection>
        <FormSection>
          <StyledSubmit type='submit' value='Submit' onSubmit={this.onSubmit}/>
        </FormSection>
      </FormWrapper>
    )
  }
}

export default GetInTouchForm
