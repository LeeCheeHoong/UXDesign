import { useCallback } from "react";
import EmailForm from "../components/EmailForm";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.signUp}>
      <section className={styles.bg} />
      <div className={styles.username} />
      <div className={styles.password} />
      <section className={styles.signUpForm}>
        <div className={styles.signUpHeader}>
          <div className={styles.signUp1}>Sign up</div>
        </div>
        <div className={styles.name} />
      </section>
      <div className={styles.confirmPassword} />
      <EmailForm />
      <div className={styles.submitButtonForm}>
        <div className={styles.signUpWrapper} onClick={onFrameContainerClick}>
          <div className={styles.signUp2} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
