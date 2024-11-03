import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./SplashScreen.module.css";

const SplashScreen = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onButtonContainerClick1 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={[styles.splashScreen, className].join(" ")}>
      <section className={styles.bg} />
      <section className={styles.splashScreenInner}>
        <div className={styles.travelyParent}>
          <h1 className={styles.travely}>Travely</h1>
          <div className={styles.vectorWrapper}>
            <img className={styles.frameChild} loading="lazy" alt="" />
          </div>
        </div>
      </section>
      <div className={styles.memoryInfo}>
        <div className={styles.button} onClick={onButtonContainerClick}>
          <div className={styles.login}>Login</div>
        </div>
        <div className={styles.button} onClick={onButtonContainerClick1}>
          <div className={styles.login}>Register</div>
        </div>
      </div>
    </div>
  );
};

SplashScreen.propTypes = {
  className: PropTypes.string,
};

export default SplashScreen;
