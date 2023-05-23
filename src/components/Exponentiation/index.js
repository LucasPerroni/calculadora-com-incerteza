import { useNavigate } from "react-router-dom"
import { useState } from "react"

import Value from "./Value"
import Result from "./Result"
import { MainTag } from "../Main/style"
import { Math } from "../../utils/Math"

export default function Exponentiation() {
  const [value, setValue] = useState({ valor: 0, incerteza: 0 })
  const [expoent, setExpoent] = useState(0)
  const [resultado, setResultado] = useState({ valor: null, incerteza: null })
  const [type, setType] = useState("")

  const router = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    if (type === "^") {
      setResultado(Math.potencia(value, expoent))
    } else if (type === "√") {
      setResultado(Math.raiz(value, expoent))
    } else if (type === "clear") {
      setValue({ valor: 0, incerteza: 0 })
      setExpoent(0)
      setResultado({ valor: null, incerteza: null })
      setType("")
    }
  }

  return (
    <MainTag>
      <h1 onClick={() => router("/")} style={{ cursor: "pointer" }}>
        Calculadora com Incerteza
      </h1>

      <Value
        handleSubmit={handleSubmit}
        value={value}
        setValue={setValue}
        expoent={expoent}
        setExpoent={setExpoent}
        type={type}
        setType={setType}
      />

      {resultado.valor || resultado.valor === 0 ? (
        <Result value={value} expoent={expoent} type={type} resultado={resultado} />
      ) : (
        <></>
      )}
    </MainTag>
  )
}
