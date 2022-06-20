import { useState } from 'react'
import Message from './Message'

const NewBudget = ({budget, setBudget}) => {

  const [ message, setMessage ] = useState('')

  const handleBudget = (e) => {
    e.preventDefault();
    if(!Number(budget) || Number(budget) < 0){
        setMessage('No es un presupuesto válido')
    }else{
        setMessage('Si es un presupuesto válido')
    }
  }

  return (
    <div className='container-budget container shadow'>
        <form onSubmit={handleBudget} className='form'>
            <div className='camp'>
                <label>Definir Presupuesto</label>
                <input
                    className='new-budget' 
                    type="text"
                    placeholder='Añade tu Presupuesto'
                    value= { budget }
                    onChange= { e => setBudget(e.target.value) }
                />
            </div>
            <input type="submit" value="Añadir" />
            {<Message tipe='error'>{message}</Message> }
        </form>
    </div>
  )
}

export default NewBudget