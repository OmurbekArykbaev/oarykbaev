import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 0 auto;
`
const Banner = styled.div`
  display: flex;
  justify-content: center;
  background-color: green;
  margin-top: 2rem;

  & > p {
    font-size: 18px;
    color: #fff;
    padding: 1rem;
  }
`
const ButtonCreate = styled.button`
  display: flex;
  justify-content: center;
  width: 8rem;
  color: var(--primary-color);
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: 1px solid var(--primary-color);
  background-color: transparent;
  border-radius: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
`
const Form = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const InputText = styled.input`
  width: 100%;
  display: flex;
  border: 1px solid var(--primary-color);
  padding: 0.6rem;
  font-size: 19px;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;

  &:focus,
  &:active {
    outline: none;
  }
`
const TextArea = styled.textarea`
  width: 100%;
  display: flex;
  border: 1px solid var(--primary-color);
  padding: 0.6rem;
  font-size: 19px;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  resize: none;

  &:focus,
  &:active {
    outline: none;
  }
`
const Submit = styled.input`
  display: flex;
  justify-content: center;
  width: 8rem;
  color: var(--primary-color);
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: 1px solid var(--primary-color);
  background-color: transparent;
  border-radius: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
`

export { Wrapper, TextArea, Banner, ButtonCreate, Form, InputText, Submit }
