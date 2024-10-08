import { CircularProgress } from "@mui/material";
import styles from "./Loader.module.css";

const Loader = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <>
      {isOpen && (
        <div className={styles.spinnerContainer}>
          <CircularProgress size={75} />
        </div>
      )}
    </>
  );
};

export default Loader;
