import BasicDialog from "./BasicDialog";
import PropTypes from "prop-types";
import styles from "./PenangTrip.module.css";

const PenangTrip = ({ className = "" }) => {
  return (
    <section className={[styles.penangTrip, className].join(" ")}>
      <div className={styles.georgetown}>
        <img className={styles.georgetownChild} loading="lazy" alt="" />
        <div className={styles.details} />
        <div className={styles.georgetownPenang} />
        <BasicDialog icon={false} divider={false} />
      </div>
      <div className={styles.eatPenangRoadCendol} />
      <div className={styles.eatPenangRoadCendol} />
    </section>
  );
};

PenangTrip.propTypes = {
  className: PropTypes.string,
};

export default PenangTrip;
