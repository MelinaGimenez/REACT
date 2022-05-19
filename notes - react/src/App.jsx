import Header from './components/Header';
import Form from './components/Form';
import PatientList from './components/PatientList';
import { useState, useEffect } from 'react';

function App() {

  const [ consultant, setConsultant ] = useState([]);
  const [ file, setFile ] = useState({});

  //obtener lo que haya en Local Storage

  useEffect(() => {
    const getLS = () => {
      const consultantLS = JSON.parse(localStorage.getItem('consultant')) ?? [];
      setConsultant(consultantLS)
    }
    getLS();
  }, [])

  //guardar datos en Local Storage

  useEffect(() => {
    localStorage.setItem('consultant', JSON.stringify(consultant))
  }, [consultant])

  //borrar caso

  const deletePatient = id => {
    const updatePatient = consultant.filter( file => file.id !== id );
    setConsultant(updatePatient)
  }

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
          deletePatient={deletePatient}
        />
      </div>

    </div>
  );
}

export default App
