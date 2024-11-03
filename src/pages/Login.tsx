import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const onClickHereToClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <section className={styles.bg} />
      <div className={styles.username} />
      <div className={styles.password} />
      <FrameComponent />
      <section className={styles.loginInner}>
        <div className={styles.dontHaveAAccountParent}>
          <div className={styles.dontHaveA}>{`Dont have a account ? `}</div>
          <div
            className={styles.clickHereToContainer}
            onClick={onClickHereToClick}
          >
            {`Click `}
            <span className={styles.here}>Here</span> to Sign up
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
