import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem;

  nav {
    display: flex;
    gap: 0.8rem;

    div {
      border-radius: 8px;

      width: 2.5rem;
      height: 2.5rem;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: ${(props) => props.theme['--yellow-300']};
    }
  }
`
