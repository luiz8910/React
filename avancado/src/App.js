import { useState } from "react";
import "./App.css";
import Mario from "./assets/mario.png";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  const [userName] = useState("luigi");

  const cars = [
    { id: 1, brand: "Mercedes", color: "green", newCar: true, km: 0 },
    { id: 2, brand: "Peugeot", color: "grey", newCar: false, km: 200000 },
    { id: 3, brand: "BMW", color: "black", newCar: true, km: 0 },
  ];

  function showMessage() {
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/luigi.png" alt="" width="100px;" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={Mario} alt="" width="100px;" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={userName} />
      <CarDetails brand="VW" km={100000} color="Blue" newCar={false} />
      <CarDetails brand="Ford" color="Red" km={4500} newCar={true} />
      <CarDetails brand="Fiat" color="White" km={4500} newCar={true} />
      {cars.map((car) => (
        <CarDetails
          brand={car.brand}
          color={car.color}
          newCar={car.newCar}
          km={car.km}
        />
      ))}
      <Fragment />
      <Container myValue={"testing"}>
        <p>Children</p>
      </Container>
      <ExecuteFunction myFunction={showMessage} />
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;
