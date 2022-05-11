import { useState, useEffect } from 'react';
import Error from './Error';

function Form({consultant, setConsultant, file, setFile}) {

    //Valores originales de los campos

    const [pet, setPet] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [symptoms, setSymptoms] = useState('');

    //Errores

    const [error, setError] = useState(false)

    useEffect(() => {
        if(Object.keys(file).length > 0 ){
            setPet(file.owner)
            setOwner(file.pet)
            setEmail(file.email)
            setDate(file.date)
            setSymptoms(file.symptoms)
        }
    }, [file])

    //Funcion para generar Id único

    const createId = () => {
        const random = Math.random().toString(36).substr(2);
        const date = Date.now().toString(36)

        return random + date
    }

    //Validación del formulario

    const handleSubmit = (e) => {
        
        e.preventDefault();
        if( [pet, owner, email, date, symptoms].includes('')){
            console.log('Atención: Campos Vacíos')
            setError(true)
        }else{
            setError(false)
        }

        const objectPatient = {
            pet, owner, email, date, symptoms
        }

        //editar si existe id o crear nuevo registro

        if(file.id) {
            //mantiene id, busca mismo id entre registros, sobreescribe anterior, limpia
            objectPatient.id = file.id
            const fileUpdate = consultant.map ( fileState => fileState.id === file.id ? objectPatient : fileState )
            setConsultant(fileUpdate)
            setFile({})
        }else{
            // Props de App.jsx, guarda datos form; agrega id
            setConsultant([...consultant, objectPatient]);
            objectPatient.id = createId();
        }



        

        // Reiniciar form despues de enviar datos

        setPet('')
        setOwner('')
        setEmail('')
        setDate('')
        setSymptoms('')

    } 

    return(

        <div className="md:w-2/3 lg:w-2/5 text-center m-3 ">
            <h2 className="font-black text-3xl text-center mt-10">
                Seguimiento Pacientes
            </h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">
                    Administralos
                </span>
            </p>

            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 border-dashed border-2 border-indigo-300">
                { error && <Error><p>Todos los campos son obligatorios</p></Error>}
                <div className="mb-5">
                    <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        id="pet"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        //Guardar lo escrito en formularios
                        value= {pet}
                        onChange= {(e) => setPet(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <input
                        id="owner"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value= {owner}
                        onChange= {(e) => setOwner(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        type="text"
                        placeholder="Email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value= {email}
                        onChange= {(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="date" className="block text-gray-700 uppercase font-bold">
                        Alta
                    </label>
                    <input
                        id="date"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value= {date}
                        onChange= {(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">
                        Sintomas
                    </label>
                    <textarea 
                        id="symptoms"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los síntomas"
                        value= {symptoms}
                        onChange= {(e) => setSymptoms(e.target.value)}
                    />
                </div>
                <input 
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-lg"
                    value= {file.id ? 'Editar Paciente' : 'Agregar Paciente' }
                />
            </form>
        </div>
    )
}

export default Form