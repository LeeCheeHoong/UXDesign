import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({
  className = "",
  configuration = "text",
  showIcon = false,
  state = "disabled",
  label,
}) => {
  return (
    <div
      className={[styles.button, className].join(" ")}
      data-configuration={configuration}
      data-showIcon={showIcon}
      data-state={state}
    >
      <div className={styles.stateLayer}>
        <div className={styles.label}>{label}</div>
      </div>
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,

  /** Variant props */
  configuration: PropTypes.string,
  showIcon: PropTypes.bool,
  state: PropTypes.string,
};

export default Button;
