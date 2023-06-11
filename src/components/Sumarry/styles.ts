import bgSummary from '../../assets/backgroundSummary.svg'
import { styled } from 'styled-components'

export const SummaryBackground = styled.div`
  position: relative;
  width: 100%;
  height: 34rem;

  background-size: cover;
  background-position: center;
  background-image: url(${bgSummary});

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const CoffeeLogo = styled.div`
  margin: auto 10rem;
  height: 360px;
`

export const SummaryText = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 12rem;
  padding: 0;
  margin-top: 5.875rem;

  span {
    font-weight: 700;
    font-size: 48px;
    line-height: 130%;
    color: ${(props) => props.theme['--gray-900']};
  }

  > p {
    margin-top: 1rem;

    /* Text/Regular L */
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    /* or 26px */

    /* Base/Subtitle */

    color: ${(props) => props.theme['--gray-700']};
    font-stretch: 100;
  }
`

export const SummaryIcons = styled.div`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: 2rem 1fr 2rem 1fr; /* Tamanho das colunas */
  grid-template-rows: 5rem; /* Duas linhas */
  grid-column-gap: 0.5rem; /* Espaçamento entre as colunas */
  align-items: center;

  max-width: 43.75rem;
  img {
    height: 2rem; /* Altura fixa para os ícones */
    width: 2rem; /* Preenche a largura da coluna */
  }
`

export const SummaryMain = styled.main`
  margin: auto 12rem;
  margin-top: 2rem;

  > span {
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
  }
`

export const MainItem = styled.div`
  width: 16rem;
  height: 19.375rem;
  border-radius: 8px;

  background-color: ${(props) => props.theme['--white-400']};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  margin-top: 1rem;
  margin-bottom: 2rem;

  img {
    margin-top: -4rem;
  }

  .tag {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 0.4rem;
    font-weight: 700;
    font-size: 10px;
    font-weight: bold;
    line-height: 130%;

    border-radius: 999px;
    height: 1.2rem;
    width: 4.6rem;
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
    justify-content: space-around;
    gap: 2rem;

    span {
      font-weight: 700;
      font-size: 20px;
      line-height: 130%;
      /* or 31px */

      text-align: center;
      /* Base/Text */
      color: ${(props) => props.theme['--gray-500']};
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;

      width: 4.5rem;
      height: 2.4rem;

      background: ${(props) => props.theme['--white-600']};
      border-radius: 6px;

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

        font-weight: 400;
        font-size: 24px;
        line-height: 140%;

        background: ${(props) => props.theme['--white-600']};

        width: 2rem;
        border: 0;

        cursor: pointer;
      }
    }
  }
`
