import { styled } from 'styled-components'

export const Container = styled.div`
  margin-top: 10rem;
  margin-left: 12rem;

  display: flex;
  gap: 1rem;
`

export const SpanEndereco = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  span {
    font-size: 16px;
  }

  p {
    font-size: 12px;
  }
`

export const Endereco = styled.div`
  position: relative;
  width: 50rem;
  height: 25rem;
  background-color: ${(props) => props.theme['--white-400']};

  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: start;
  justify-content: center;
  border-radius: 6px;

  margin-top: 1rem;

  .imageMap {
    margin-left: 3rem;
    margin-bottom: 1rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }
`

export const FormEndereco = styled.form`
  margin-left: 3rem;

  position: relative;

  input {
    height: 3rem;
    margin-bottom: 0.5rem;
    border: 1px solid ${(props) => props.theme['--white-600']};
    border-radius: 8px;
    background-color: ${(props) => props.theme['--white-500']};
    margin-right: 1rem;
  }

  input:focus {
    border-color: red;
  }
`

export const Payment = styled.div`
  background-color: ${(props) => props.theme['--white-400']};
  border-radius: 6px;
  width: 50rem;
  height: 11rem;

  margin-top: 1rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const PaymentText = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-left: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    margin-top: 0.2rem;

    span {
      font-size: 16px;
      font-weight: 400;
    }

    p {
      color: ${(props) => props.theme['--gray-500']};
      font-size: 14px;
    }
  }
`

export const ButtonLayout = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  margin-top: 1rem;

  button {
    width: 14rem;
    height: 3rem;

    font-size: 12px;
    color: ${(props) => props.theme['--gray-500']};

    background-color: ${(props) => props.theme['--white-600']};
    border: 0;
    border-radius: 8px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    cursor: pointer;
  }
`

export const SelectedCoffee = styled.div`
  display: flex;
  flex-direction: column;

  width: 45rem;
`

export const SelectedCoffeeContainer = styled.div`
  background-color: ${(props) => props.theme['--white-400']};

  margin-top: 1rem;

  border-radius: 8px;

  display: flex;
  flex-direction: column;

  button {
    margin: 3rem;
    height: 3rem;
    width: 20rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 8px;
    background-color: ${(props) => props.theme['--yellow-400']};

    color: ${(props) => props.theme['--white-500']};
    font-weight: 700;

    cursor: pointer;
  }

  button:hover {
    background-color: ${(props) => props.theme['--yellow-500']};
    transition: 0.5s;
  }
`

export const TextOfPurchasedItems = styled.div`
  display: flex;
  justify-content: space-around;

  gap: 13rem;

  div {
    display: flex;
    flex-direction: column;

    gap: 0.6rem;

    p {
      font-size: 14px;
    }

    span {
      font-size: 20px;
      font-weight: 700;
    }
  }
`

export const ButtonOfPurshaced = styled.div`
  display: flex;
  justify-content: center;
`
