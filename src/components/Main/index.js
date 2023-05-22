import { MainTag } from "./style"

import { useState } from "react"
import Values from "./Values"
import Result from "./Result"

export default function Main() {
  const [value1, setValue1] = useState({ valor: 0, incerteza: 0 })
  const [value2, setValue2] = useState({ valor: 0, incerteza: 0 })
  const [resultado, setResultado] = useState({ valor: null, incerteza: null })
  const [type, setType] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    console.log(value1, value2, type)
  }

  return (
    <>
      <MainTag>
        <h1>Calculadora com Incerteza</h1>

        <Values
          handleSubmit={handleSubmit}
          value1={value1}
          value2={value2}
          setValue1={setValue1}
          setValue2={setValue2}
          setType={setType}
        />

        {resultado.valor ? <Result value1={value1} value2={value2} type={type} /> : <></>}
      </MainTag>
    </>
  )
}
