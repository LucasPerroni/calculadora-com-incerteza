import { ResultTag } from "../Main/Result"

export default function Result({ value, expoent, type, resultado }) {
  return (
    <ResultTag className="resultado">
      <p>
        {value.valor} ± {value.incerteza}
      </p>
      <span> {type} </span>
      <p>{expoent}</p>
      <span> = </span>
      <p>
        {resultado.valor} ± {resultado.incerteza}
      </p>
    </ResultTag>
  )
}
