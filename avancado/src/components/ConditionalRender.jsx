import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);

  const [name, setName] = useState("Mark");

  return (
    <div>
      <h1>If ternário</h1>
      {x && <h1>ConditionalRender</h1>}

      {name === "John" ? (
        <div>
          <p>O nome é {name}</p>
        </div>
      ) : (
        <div>
          <p>Erro</p>
        </div>
      )}
      <button onClick={() => setName("John")}>Clique aqui IF</button>
    </div>
  );
};

export default ConditionalRender;
