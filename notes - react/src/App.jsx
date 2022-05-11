import Header from './components/Header';
import Form from './components/Form';
import PatientList from './components/PatientList';
import { useState } from 'react';

function App() {

  const [ consultant, setConsultant ] = useState([]);
  const [ file, setFile ] = useState({});

  return (

    <div className='container mx-auto mt-20'>

    <Header />

      <div className='mt-12 md:flex md:w-full'>
        <Form 
          consultant={consultant}
          setConsultant={setConsultant}
          file={file}
          setFile={setFile}
        />
        <PatientList 
          consultant={consultant}
          setFile={setFile}
        />
      </div>

    </div>
  );
}

export default App
