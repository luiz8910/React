import { useState } from "react";

const ManageData = () => {
  let value = 10;

  console.log(value);

  const [number, setNumber] = useState(15);

  return (
    <div>
      <div>
        <p>Valor: {value}</p>
        <button onClick={() => (value = 15)}>Mudar valor</button>
      </div>
      <p>Valor alterado: {number}</p>
      <button onClick={() => setNumber(25)}>Mudar o state</button>
    </div>
  );
};

export default ManageData;
