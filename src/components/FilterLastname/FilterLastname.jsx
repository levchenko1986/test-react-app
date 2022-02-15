import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./FilterLastname.module.css";



function FilterLastname({ filter1, OnLastnameChange }) {
  return (
    <label className={styles.label1}>
      Фамилия
      <input
        className={styles.input1}
        type="text"
        lastname="lastname"
        value={filter1}
        onChange={OnLastnameChange}
      />
    </label>
  );
}

FilterLastname.propTypes = {
  OnLastnameChange: PropTypes.func,
  filter1: PropTypes.string,
};

export default FilterLastname;