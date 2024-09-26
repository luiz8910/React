import React from "react";

const ChangeMessageState = ({ handleMessage }) => {
  const messages = ["msg1", "msg2", "msg3"];

  return (
    <div>
      <button key="1" onClick={() => handleMessage(messages[0])}>
        Btn 1
      </button>
      <button key="2" onClick={() => handleMessage(messages[1])}>
        Btn 2
      </button>
      <button key="3" onClick={() => handleMessage(messages[2])}>
        Btn 3
      </button>
    </div>
  );
};

export default ChangeMessageState;
