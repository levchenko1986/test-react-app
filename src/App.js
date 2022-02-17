import { useEffect, useState } from "react";
import HeroesList from "./components/HeroesList";
import Container from "./components/Container";
import axios from "axios";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);

  useEffect(() => {
    axios
      .get("https://venbest-test.herokuapp.com")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const filteredHeroes = (values) => {
    return values.filter((value) => {
      const availableSexFilter = [];
      if (isMale) availableSexFilter.push("m");
      if (isFemale) availableSexFilter.push("f");
      return (
        value.lastname.toLowerCase().includes(lastname.toLowerCase()) &&
        value.name.toLowerCase().includes(name.toLowerCase()) &&
        String(value.age).includes(String(age.replace(/[^\d]/g, ""))) &&
        (availableSexFilter.length === 0 ||
          availableSexFilter.includes(value.sex.toLowerCase()))
      );
    });
  };

  return (
    <Container>
      <div className="app">
        <div className="hero">
          <h1 className="title">Информация пользователя</h1>
          <div className="inputSearch">
            <label className="label">
              Имя
              <input
                className="input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="label">
              Фамилия
              <input
                className="input"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </label>
            <label className="label">
              Возраст
              <input
                className="input"
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
          </div>
          <ul className="sexWrapper">
            <li className="sex">
              <p>Пол мужской:</p>
              <input
                checked={isMale}
                className="title"
                type="checkbox"
                value="m"
                onChange={(e) => setIsMale(!isMale)}
              />
            </li>
            <li className="sex">
              <p>Пол женский:</p>
              <input
                checked={isFemale}
                className="title"
                type="checkbox"
                value="f"
                onChange={(e) => setIsFemale(!isFemale)}
              />
            </li>
          </ul>
        </div>
        <ul className="card">
          <HeroesList data={filteredHeroes(data)} />
        </ul>
      </div>
    </Container>
  );
};

export default App;
