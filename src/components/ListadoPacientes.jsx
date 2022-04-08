import Paciente from './Paciente';

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:overflow-y-scroll md:h-screen md:w-1/2 lg:w-3/5">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="text-3xl font-black text-center">
            Listado de pacientes
          </h2>
          <p className="mt-5 mb-10 text-lg text-center">
            Administra tus {''}
            <span className="font-bold text-indigo-600">Pacientes y citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              paciente={paciente}
              key={paciente.id}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="text-3xl font-black text-center">No hay pacientes</h2>
          <p className="mt-5 mb-10 text-lg text-center">
            Comienza agregando pacientes {''}
            <span className="font-bold text-indigo-600">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
