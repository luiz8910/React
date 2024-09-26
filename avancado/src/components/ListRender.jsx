import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Item 1", "Item 2", "Item 3"]);

  const [user, setUsers] = useState([
    { id: 1, name: "John", age: 13 },
    { id: 2, name: "Mary", age: 15 },
    { id: 3, name: "Kevin", age: 17 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {user.map((item) => (
          <li key={item.id}>
            {item.name} - {item.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete Random user</button>
    </div>
  );
};

export default ListRender;
