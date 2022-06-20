import { useState } from 'react'
import Header from './components/Header'

function App() {

  const [ estimate, setEstimate ] = useState(0);

  return (  
    <div>
      <Header 
        estimate = { estimate }
        setEstimate = { setEstimate }
      />
    </div>
  )
}

export default App
