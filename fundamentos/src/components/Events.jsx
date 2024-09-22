const Events = () => {
  const handleMyEvent = () => {
    console.log("Clique");
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui</button>
      </div>
    </div>
  );
};

export default Events;
