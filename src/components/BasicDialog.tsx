import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./BasicDialog.module.css";

const BasicDialog = ({ className = "", icon = false, divider = false }) => {
  const navigate = useNavigate();

  const onBasicDialogContainerClick = useCallback(() => {
    navigate("/homepage-1");
  }, [navigate]);

  return (
    <div
      className={[styles.basicDialog, className].join(" ")}
      onClick={onBasicDialogContainerClick}
      data-icon={icon}
    >
      <div className={styles.textContent}>
        <div className={styles.titleDescription}>
          <h2 className={styles.title}>Are you sure?</h2>
          <div className={styles.body}>
            Do you want to delete the tour details?
          </div>
        </div>
      </div>
      {divider && (
        <div className={styles.divider1}>
          <div className={styles.horizontalfullWidth}>
            <div className={styles.divider} />
          </div>
        </div>
      )}
      <div className={styles.actions1}>
        <div className={styles.actions}>
          <Button
            configuration="text"
            showIcon={false}
            state="enabled"
            label="No"
          />
          <Button
            configuration="text"
            showIcon={false}
            state="enabled"
            label="Yes"
          />
        </div>
      </div>
    </div>
  );
};

BasicDialog.propTypes = {
  className: PropTypes.string,
  divider: PropTypes.bool,

  /** Variant props */
  icon: PropTypes.bool,
};

export default BasicDialog;
