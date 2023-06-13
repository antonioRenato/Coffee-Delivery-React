import { styled } from 'styled-components'

export const MainItem = styled.div`
  width: 16rem;
  height: 19rem;
  border-radius: 8px;

  background-color: ${(props) => props.theme['--white-400']};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  margin-top: 2rem;
  margin-bottom: 2rem;

  img {
    margin-top: -3.5rem;
  }

  .tagContainer {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tag {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-top: 0.4rem;
    font-weight: 700;
    font-size: 10px;
    font-weight: bold;
    line-height: 130%;

    border-radius: 999px;
    height: 1.2rem;
    /* identical to box height, or 13px */
    /* Brand / Yellow Dark */
    color: ${(props) => props.theme['--yellow-700']};
    background-color: ${(props) => props.theme['--yellow-300']};
  }

  > span {
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    /* or 18px */

    text-align: center;
    color: ${(props) => props.theme['--gray-300']};

    margin: 0 0.5rem;
  }

  .price {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    margin-top: 2.5rem;

    span {
      font-weight: 700;
      font-size: 20px;
      line-height: 130%;
      /* or 31px */

      text-align: center;
      /* Base/Text */
      color: ${(props) => props.theme['--gray-500']};
    }

    .buttonsQuantity {
      display: flex;
      flex-direction: row;
      align-items: center;

      margin-left: 2rem;

      border-radius: 8px;
      background: ${(props) => props.theme['--white-600']};

      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;

        color: ${(props) => props.theme['--gray-900']};
      }

      button {
        color: ${(props) => props.theme['--purple-500']};

        display: flex;
        align-items: center;
        justify-content: center;

        width: 3.5rem;
        height: 2.4rem;

        font-weight: 400;
        font-size: 24px;
        line-height: 140%;

        background: ${(props) => props.theme['--white-600']};

        width: 2rem;
        border: 0;
        border-radius: 8px;

        cursor: pointer;
      }

      button:hover {
        background: ${(props) => props.theme['--white-400']};
      }
    }
    div {
      .CarIcon {
        width: 2.375rem;
        height: 2.375rem;

        background-color: ${(props) => props.theme['--purple-700']};

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;

        border-radius: 8px;
        border: 0;
      }

      .CarIcon:hover {
        background-color: ${(props) => props.theme['--purple-400']};
      }
    }
  }
`
