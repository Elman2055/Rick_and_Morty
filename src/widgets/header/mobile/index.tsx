import React, { useState } from "react";
import Link from "next/link";
import { Button, Collapse, Box } from "@mui/material";
import { useTranslations } from "next-intl";
import styles from "./index.module.scss";

const MobileHeader = () => {
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.headerContainer} ${open ? styles.expanded : ""}`}>
      <header>
        <Button
          variant="contained"
          onClick={() => setOpen(!open)}
          style={{ margin: "0 auto" }}
        >
          {t("Header.MAIN_TITLE")}
        </Button>
      </header>
      <Collapse in={open}>
        <Box className={styles.headerNavigation}>
          <Link href={"/"} onClick={() => setOpen(!open)}>
            <h2>{t("Header.CHARACTERS_TITLE")}</h2>
          </Link>
          <Link href={"/episodes"} onClick={() => setOpen(!open)}>
            <h2>{t("Header.EPISODES_TITLE")}</h2>
          </Link>
          <Link href={"/locations"} onClick={() => setOpen(!open)}>
            <h2>{t("Header.LOCATIONS_TITLE")}</h2>
          </Link>
        </Box>
      </Collapse>
    </div>
  );
};

export default MobileHeader;
