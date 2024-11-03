import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddPlan.module.css";

const AddPlan = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/homepage-2");
  }, [navigate]);

  return (
    <div className={styles.addPlan}>
      <img className={styles.addPlanChild} alt="" src="/rectangle-2@2x.png" />
      <div className={styles.bg} />
      <img className={styles.addPlanItem} alt="" />
      <section className={styles.shapeParent}>
        <div className={styles.shape} />
        <div className={styles.georgetownPenangParent}>
          <div className={styles.shape} />
          <div className={styles.eatPenangRoadCendol} />
          <div className={styles.tripToPenang} />
        </div>
      </section>
      <div className={styles.addPlanInner}>
        <div className={styles.saveWrapper} onClick={onFrameContainerClick}>
          <div className={styles.save} />
        </div>
      </div>
    </div>
  );
};

export default AddPlan;
