import { Pagination } from "@mui/material";
import styles from "./PaginationPage.module.scss";

type TPagination = {
  count: number;
  onChange: (page: number) => void;
};

const PaginationPage = ({ count, onChange }: TPagination) => {
  return (
    <div className={styles.pagination}>
      <Pagination
        count={count}
        color="primary"
        onChange={(event, page) => onChange(page)}
      />
    </div>
  );
};

export default PaginationPage;
