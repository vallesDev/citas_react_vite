const Error = ({ mensaje }) => {
  return (
    <div>
      <p className="p-3 mb-3 font-bold text-center text-white uppercase bg-red-800 rounded-md">
        {mensaje}
      </p>
    </div>
  );
};

export default Error;
