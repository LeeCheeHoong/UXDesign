import PenangTrip from "../components/PenangTrip";
import styles from "./DeletePlan.module.css";

const DeletePlan = () => {
  return (
    <div className={styles.deletePlan}>
      <img
        className={styles.deletePlanChild}
        alt=""
        src="/rectangle-21@2x.png"
      />
      <div className={styles.bg} />
      <PenangTrip />
      <div className={styles.frameParent}>
        <div className={styles.updateContainerWrapper}>
          <div className={styles.updateContainer}>
            <div className={styles.update} />
          </div>
        </div>
        <div className={styles.updateContainer}>
          <div className={styles.update} />
        </div>
      </div>
    </div>
  );
};

export default DeletePlan;
