import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Soma = props  => {
  const { max , min } = props
  return (
    <Card title="Soma de Números" green>
        <div className="Soma">
            <span>
                <span>Resultado:</span>
                <strong>{max + min}</strong>
            </span>
        </div>
    </Card>
  )
}

function mapStateToProps(state){
  return{
    max: state.numeros.max,
    min: state.numeros.min,
  }
}

export default connect(mapStateToProps)(Soma)
