import { Pagination, useMediaQuery } from "@mui/material";
import styles from "./PaginationPage.module.css";

type TPagination = {
  count: number;
  onChange: (page: number) => void;
};

const PaginationPage = ({ count, onChange }: TPagination) => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div className={styles.pagination}>
      <Pagination
        count={count}
        color="primary"
        size={isMobile ? "small" : "medium"}
        onChange={(event, page) => {
          onChange(page);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
};

export default PaginationPage;
