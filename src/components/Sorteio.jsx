import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Sorteio = props => {
  const { max, min } = props
  function randNum(min, max) {
    return parseInt(Math.random() * (max - min) + min)
  }

  return (
    <Card title="Sorteio de Números" purple>
      <div className="Sorteio">
        <span>
          <span>Resultado: </span>
          <strong>{randNum(min, max)}</strong>
        </span>
      </div>
    </Card>
  )
}

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  }
}

export default connect(mapStateToProps)(Sorteio)
