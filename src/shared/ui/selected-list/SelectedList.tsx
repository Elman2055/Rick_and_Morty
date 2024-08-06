import { TListInfo } from "@/shared/types/types";
import { useTranslations } from "next-intl";
import styles from "./SelectedList.module.scss";

const SelectedList = ({ selectedList }: { selectedList: TListInfo }) => {
  const t = useTranslations();

  return (
    <>
      {selectedList && (
        <ul className={styles.selectedList}>
          <li className={styles.selectedListItem}>
            <h2 className={styles.selectedListName}>{selectedList.name}</h2>
            {selectedList.air_date ? (
              <p className={styles.selectedListTitle}>
                {t("SelectedList.DATE_TITLE")} {selectedList.air_date}
              </p>
            ) : (
              <>
                <p className={styles.selectedListTitle}>
                {t("SelectedList.TYPE_TITLE")} {selectedList.type}
                </p>
                <p className={styles.selectedListTitle}>
                {t("SelectedList.DIMENSION_TITLE")} {selectedList.dimension}
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
