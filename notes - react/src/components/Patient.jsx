export const Patient = ({consultant, setFile, deletePatient}) => {

    const {pet, owner, email, date, symptoms, id} = consultant

  return (
    <div className="m-3 text-center bg-white shadow-md px-5 py-10 rounded-xl border-dashed border-2 border-indigo-300">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">{pet}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
            <span className="font-normal normal-case">{owner}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
            <span className="font-normal normal-case">{date}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
            <span className="font-normal normal-case">{symptoms}</span>
        </p>
        <div className="flex justify-around mt-10">
            <button 
                type="button"
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                onClick={() => setFile(consultant)}
                >Editar
                </button>
            <button
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                onClick={() => deletePatient(id)}
                >Eliminar
                </button>
        </div>
    </div>
  )
}
