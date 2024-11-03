import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EditPlan.module.css";

const EditPlan = () => {
  const navigate = useNavigate();

  const onUpdateContainerClick = useCallback(() => {
    navigate("/homepage-2");
  }, [navigate]);

  const onCodingContainerClick = useCallback(() => {
    navigate("/delete-plan");
  }, [navigate]);

  return (
    <div className={styles.editPlan}>
      <img className={styles.editPlanChild} alt="" src="/rectangle-21@2x.png" />
      <div className={styles.bg} />
      <section className={styles.editPlanInner}>
        <img className={styles.frameChild} loading="lazy" alt="" />
      </section>
      <div className={styles.devLabels} />
      <div className={styles.georgetownPenang} />
      <section className={styles.penangTripParent}>
        <div className={styles.penangTrip}>
          <div className={styles.eatPenangRoadCendol} />
          <div className={styles.eatPenangRoadCendol} />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.updateContainerWrapper}>
            <div
              className={styles.updateContainer}
              onClick={onUpdateContainerClick}
            >
              <div className={styles.update} />
            </div>
          </div>
          <div
            className={styles.updateContainer}
            onClick={onCodingContainerClick}
          >
            <div className={styles.update} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditPlan;
