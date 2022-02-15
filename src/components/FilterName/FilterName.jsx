import PropTypes from "prop-types";
import styles from "./Filter.module.css";

function FilterName({ filter, onFilterChange }) {
  return (
    <label className={styles.label}>
      Имя
      <input
        className={styles.input}
        type="text"
        name="name"
        value={filter}
        onChange={onFilterChange}
      />
    </label>
  );
}

FilterName.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default FilterName;