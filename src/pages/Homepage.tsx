import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/add-plan");
  }, [navigate]);

  return (
    <div className={styles.homepage1}>
      <footer className={styles.bg} />
      <div className={styles.goodMorningUserWrapper}>
        <div className={styles.goodMorningUser}>Good Morning User</div>
      </div>
      <section className={styles.planOptions}>
        <div className={styles.planOptionsInner}>
          <div
            className={styles.addPlanWrapper}
            onClick={onFrameContainerClick}
          >
            <div className={styles.addPlan} />
          </div>
        </div>
        <div className={styles.heroContainerParent}>
          <img
            className={styles.heroContainerIcon}
            alt=""
            src="/hero-container@2x.png"
          />
          <img className={styles.frameChild} loading="lazy" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Homepage;
