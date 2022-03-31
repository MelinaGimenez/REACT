import { useState } from 'react'
import Header from './components/Header';
import Form from './components/Form';
import PatientList from './components/PatientList';

function App() {

  return (
    <div className=''>
    <Header />
    <Form />
    <PatientList />
    </div>
  );
}

export default App
