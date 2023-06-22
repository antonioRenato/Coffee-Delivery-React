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
  width: 50%;
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
  width: 50%;
  height: 10rem;

  margin-top: 1rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const DollarImg = styled.div``

export const PaymentText = styled.div`
  display: flex;
  gap: 1rem;

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
