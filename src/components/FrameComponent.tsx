import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/homepage-1");
  }, [navigate]);

  return (
    <section className={[styles.topContentParent, className].join(" ")}>
      <div className={styles.topContent}>
        <div className={styles.letsGetStartedWrapper}>
          <div className={styles.letsGetStarted}>Lets Get Started</div>
        </div>
        <img className={styles.topContentChild} loading="lazy" alt="" />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.signInWrapper} onClick={onFrameContainerClick}>
          <div className={styles.signIn} />
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
