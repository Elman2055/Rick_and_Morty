import styles from "./ListPage.module.scss";
import { useRouter } from "next/navigation";
import { TList, TListInfo } from "@/shared/types";

const ListPage = ({ list, title, route }: TList) => {
  const router = useRouter();

  return (
    <ul className={styles.list}>
      {list &&
        list.map((el: TListInfo) => (
          <li
            key={el.id}
            className={styles.listItem}
            onClick={() => router.push(`${route}/${el.id}`)}
          >
            <h2 className={styles.listName}>{el.name}</h2>
            <p className={styles.listTitle}>
              {title} {el.type ? el.type : el.air_date}
            </p>
          </li>
        ))}
    </ul>
  );
};

export default ListPage;
