import styles from "./HeroesList.moule.css";
import React from "react";

const HeroesList = (props) => {
  return (
    <>
      {props.data.map((hero) => (
        <li className={styles.item}>
          <p>
            {hero.name} {hero.lastname}
          </p>
          <p>Возраст: {hero.age}</p>
          <p>Пол: {hero.sex === "m" ? "мужской" : "женский"}</p>
        </li>
      ))}
    </>
  );
};

export default HeroesList;
