import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Homepage1.module.css";

const Homepage1 = () => {
  const navigate = useNavigate();

  const onPlanIconClick = useCallback(() => {
    navigate("/edit-plan");
  }, [navigate]);

  return (
    <div className={styles.homepage2}>
      <section className={styles.bg} />
      <div className={styles.goodMorningUserWrapper}>
        <div className={styles.goodMorningUser}>Good Morning User</div>
      </div>
      <section className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.addPlanWrapper}>
            <div className={styles.addPlan} />
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.planElementParent}>
            <img
              className={styles.planElementIcon}
              alt=""
              src="/hero-container@2x.png"
            />
            <img className={styles.frameChild} loading="lazy" alt="" />
          </div>
          <div className={styles.watchListWrapper}>
            <div className={styles.watchList}>
              <div className={styles.planIcon} onClick={onPlanIconClick} />
              <div className={styles.tripToPenang}>Trip to Penang</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage1;
