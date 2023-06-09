import { styled } from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme['--white-300']};
`
