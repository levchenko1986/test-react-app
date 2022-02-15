import PropTypes from "prop-types";
// import { name, lastname, age, sex } from "../heroes.json";
// import axios from "axios";
import styles from "./HeroesList.moule.css";

const HeroesList = ({ getHeroes, getHeroes1 }) => {
  return (
    <ul className={styles.list}>
      {getHeroes.map(({ name, lastname, age, sex }) => {
        
        return (
          <li className={styles.item} key={name.toString()}>
            <p>{name} {lastname}</p>
            <p>Возраст: {age}</p>
            <p>Пол: {sex === 'm' ? 'мужской' : 'женский'}</p>
          </li>
        );
      })}
    </ul>
  );
};

HeroesList.propTypes = {
    getHeroes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      lastname: PropTypes.string,
      age: PropTypes.number,
      sex: PropTypes.string,
    })
  ),
};

export default HeroesList;