import styled, { keyframes } from "styled-components"

const LoadingAnimation = keyframes`
  0%  {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
`
const Loading = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LoadingSpin = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid var(--primary-color);
    border-color: var(--primary-color) transparent var(--primary-color)
      transparent;
    animation: ${LoadingAnimation} 1.2s linear infinite;
  }
`

export { Loading, LoadingAnimation, LoadingSpin }
