import { Patient } from "./Patient"

const PatientList= ({consultant}) => {

    return(
        <div className="md:w-1/2 lg:w-3/5">

            {consultant && consultant.length ? (
                <>
                    <h2 className="font-black text-3xl text-center mt-10">Listado Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>
                    <div className="md h-screen overflow-y-scroll">
                        {consultant.map(consultant => (
                            <Patient
                            key={consultant.id}
                            consultant={consultant}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center mt-10">Sin Pacientes Nuevos</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comeinza Agregando {''}
                        <span className="text-indigo-600 font-bold">Nuevos Pacientes</span>
                    </p>
                </>
            )}
        </div>        
    )
}

export default PatientList