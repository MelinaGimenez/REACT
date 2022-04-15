export const Patient = () => {
  return (
    <div className="m-3 text-center bg-white shadow-md px-5 py-10 rounded-xl border-dashed border-2 border-indigo-300">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
            <span className="font-normal normal-case">Juan</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case">correo@correo.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
            <span className="font-normal normal-case">10 diciembre 2022</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
            <span className="font-normal normal-case">Pasaron cosas</span>
        </p>
    </div>
  )
}
