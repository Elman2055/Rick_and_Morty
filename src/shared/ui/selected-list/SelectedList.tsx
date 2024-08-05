import { TListInfo } from "@/shared/types";
import styles from "./SelectedList.module.scss";

const SelectedList = ({ selectedList }: { selectedList: TListInfo }) => {
  return (
    <>
      {selectedList && (
        <ul className={styles.selectedList}>
          <li className={styles.selectedListItem}>
            <h2 className={styles.selectedListName}>{selectedList.name}</h2>
            {selectedList.air_date ? (
              <p className={styles.selectedListTitle}>
                Air Date: {selectedList.air_date}
              </p>
            ) : (
              <>
                <p className={styles.selectedListTitle}>
                  Type: {selectedList.type}
                </p>
                <p className={styles.selectedListTitle}>
                  Dimension: {selectedList.dimension}
                </p>
              </>
            )}
          </li>
        </ul>
      )}
    </>
  );
};

export default SelectedList;
