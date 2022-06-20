import React from 'react'
import NewBudget from './NewBudget'

const Header = ({estimate, setEstimate}) => {

  return (
    <header>
        <h1>Planificador de Gastos</h1>
        <NewBudget 
          estimate = { estimate }
          setEstimate = { setEstimate }
        />
    </header>
  )
}

export default Header