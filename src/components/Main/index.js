import styled from "styled-components"

import Input from "./Input"
import { useState } from "react"

export default function Main() {
  const [valor1, setValor1] = useState({ valor: 0, incerteza: 0 })
  const [valor2, setValor2] = useState({ valor: 0, incerteza: 0 })

  function handleSubmit(e) {
    e.preventDefault()
    console.log(valor1, valor2)
  }

  return (
    <>
      <MainTag>
        <h1>Calculadora com Incerteza</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          <p>Valor 1: </p>
          <div>
            <Input label="Valor" valor={valor1} setValor={setValor1} />
            <p style={{ margin: "0" }}>±</p>
            <Input label="Incerteza" valor={valor1} setValor={setValor1} />
          </div>

          <p>Valor 2: </p>
          <div>
            <Input label="Valor" valor={valor2} setValor={setValor2} />
            <p style={{ margin: "0" }}>±</p>
            <Input label="Incerteza" valor={valor2} setValor={setValor2} />
          </div>
        </form>
      </MainTag>
    </>
  )
}

const MainTag = styled.main`
  width: 90%;
  height: 100vh;
  background-color: var(--background-color);

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;
  padding: 40px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);

  h1 {
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    color: white;

    margin-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div {
    position: relative;
    display: flex;
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;
  }

  p {
    font-size: 25px;
    font-weight: bold;
    color: white;
    margin: 20px 0 10px;
  }

  @media (max-width: 700px) {
    div {
      flex-direction: column !important;
    }
  }
`
