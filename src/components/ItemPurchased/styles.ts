import { styled } from 'styled-components'

export const SelectedCoffeeItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 40rem;
  margin-left: 2rem;

  margin-bottom: 2rem;
  padding: 2rem;

  border-bottom: 2px solid ${(props) => props.theme['--white-600']};

  img {
    width: 6rem;
    height: 6rem;

    position: absolute;
    margin-right: 27rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    width: 20.5rem;

    p {
      font-size: 20px;
    }

    margin-left: 6.5rem;
  }

  span {
    font-size: 20px;
  }

  .buttonsQuantity {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 8rem;

    border-radius: 8px;
    background: ${(props) => props.theme['--white-600']};

    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 130%;

      color: ${(props) => props.theme['--gray-900']};
    }

    button {
      color: ${(props) => props.theme['--purple-500']};

      display: flex;
      align-items: center;
      justify-content: center;

      width: 5.5rem;
      height: 3.4rem;

      font-weight: 400;
      font-size: 32px;
      line-height: 140%;

      background: ${(props) => props.theme['--white-600']};
      border: 0;
      border-radius: 8px;

      cursor: pointer;
    }

    button:hover {
      background: ${(props) => props.theme['--white-400']};
    }
  }
`
