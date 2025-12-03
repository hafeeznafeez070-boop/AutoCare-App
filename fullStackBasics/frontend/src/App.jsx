import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [people, setPeople] = useState([]);
  console.log(people.length);

  useEffect(() => {
    axios
      .get("/api/person")
      .then((response) => {
        setPeople(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(people);
  return (
    <>
      <h1>Mini full stack project</h1>
      <h3>Total People:{people.length}</h3>
      {people.map((person, index) => (
        <div key={person.id}>
          <h4>{person.name}</h4>
          <p>{person.age}</p>
        </div>
      ))}
    </>
  );
}

export default App;
