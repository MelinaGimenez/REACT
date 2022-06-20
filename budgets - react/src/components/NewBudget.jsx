import React from 'react'

const NewBudget = ({estimate, setEstimate}) => {
  return (
    <div className='container-budget container shadow'>
        <form className='form'>
            <div className='camp'>
                <label>Definir Presupuesto</label>
                <input
                    className='new-budget' 
                    type="text"
                    placeholder='Añade tu Presupuesto'
                    value= { estimate }
                    onChange= { e => setEstimate(e.target.value) }
                />
            </div>
            <input type="submit" value="Añadir" />
        </form>
    </div>
  )
}

export default NewBudget