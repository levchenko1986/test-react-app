import { useState } from "react";
import HeroesList from "./components/HeroesList";
import Container from "./components/Container";
import FilterName from "./components/FilterName";
import FilterLastname from "./components/FilterLastname";
import axios from "axios";
import useLocalStorage from "./components/LocalStorage";
import styles from "./App.css";

const defaultHeroes = axios.get("https://venbest-test.herokuapp.com/");
function App() {

  const [allHeroes] = useLocalStorage(
    "allHeroes",
    defaultHeroes
  );
  
  const [filter, setFilter] = useState("");
  const [filter1, setLastname] = useState("");


  const handleHeroes = () => {
    const onHeroesFilter = filter.toLowerCase();
    return allHeroes.filter((hero) =>
      hero.name.toLowerCase().includes(onHeroesFilter)
    );
  };

  const filterChange = (event) => {
    setFilter(event.target.value);
  };
  const lastnameChange = (event) => {
    setLastname(event.target.value);
  };



  const handleHeroes1 = () => {
    const onHeroesFilter1 = filter1.toLowerCase();
    return allHeroes.filter((hero) =>
      hero.lastname.toLowerCase().includes(onHeroesFilter1)
    );
  };

  const getHeroes1 = handleHeroes1();


  const getHeroes = handleHeroes();
  return (
    <Container>
      <div className={styles.app}>
        <h1 className={styles.title}>Информация пользователя</h1>
        <FilterName filter={filter} onFilterChange={filterChange} />
        <FilterLastname filter1={filter1} OnLastnameChange={lastnameChange} />
        <HeroesList getHeroes={getHeroes, getHeroes1} />
      </div>
    </Container>
  );
}

export default App;