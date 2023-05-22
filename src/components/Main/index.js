import { MainTag } from "./style"

import { useState } from "react"
import Values from "./Values"
import Result from "./Result"
import { Math } from "../../utils/Math"

export default function Main() {
  const [value1, setValue1] = useState({ valor: 0, incerteza: 0 })
  const [value2, setValue2] = useState({ valor: 0, incerteza: 0 })
  const [resultado, setResultado] = useState({ valor: null, incerteza: null })
  const [type, setType] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    if (type === "+") {
      setResultado(Math.soma(value1, value2))
    } else if (type === "-") {
      setResultado(Math.subtracao(value1, value2))
    } else if (type === "x") {
      setResultado(Math.multiplicacao(value1, value2))
    } else if (type === "/") {
      setResultado(Math.divisao(value1, value2))
    } else if (type === "clear") {
      setValue1({ valor: 0, incerteza: 0 })
      setValue2({ valor: 0, incerteza: 0 })
      setResultado({ valor: null, incerteza: null })
    }
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

        {resultado.valor || resultado.valor === 0 ? (
          <Result value1={value1} value2={value2} type={type} resultado={resultado} />
        ) : (
          <></>
        )}
      </MainTag>
    </>
  )
}
