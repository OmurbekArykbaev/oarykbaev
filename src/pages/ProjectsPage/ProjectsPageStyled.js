import styled from "styled-components"

const ProjectSection = styled.section`
  position: relative;
  background-color: var(--secondary-color);
`
const Wrapper = styled.div`
  padding: 2rem 0;
  height: calc(100% - 77px);
  display: grid;
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(380px, 3fr));
`

export { ProjectSection, Wrapper }
