import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem;

  margin: auto 10rem;
  background-color: ${(props) => props.theme['--white-300']};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  border-radius: 8px;

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

    .numberOfShops {
      border-radius: 999px;
      background-color: ${(props) => props.theme['--yellow-500']};
      color: white;
      font-weight: bold;
      font-size: 14px;

      height: 1.3rem;
      width: 1.3rem;

      position: absolute;
      margin-left: 10.5rem;
      margin-top: -0.5rem;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
