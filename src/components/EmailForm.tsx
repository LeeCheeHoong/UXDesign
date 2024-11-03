import PropTypes from "prop-types";
import styles from "./EmailForm.module.css";

const EmailForm = ({ className = "" }) => {
  return (
    <section className={[styles.emailForm, className].join(" ")}>
      <div className={styles.emailInput}>
        <img className={styles.emailInputChild} loading="lazy" alt="" />
      </div>
      <div className={styles.email} />
    </section>
  );
};

EmailForm.propTypes = {
  className: PropTypes.string,
};

export default EmailForm;
