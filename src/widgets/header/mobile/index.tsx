import React, { useState } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import { Button, Collapse, Box } from "@mui/material";

const MobileHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.headerContainer} ${open ? styles.expanded : ""}`}>
      <header>
        <Button
          variant="contained"
          onClick={() => setOpen(!open)}
          style={{ margin: "0 auto" }}
        >
          Rick & Morty
        </Button>
      </header>
      <Collapse in={open}>
        <Box className={styles.headerNavigation}>
          <Link href={"/"} onClick={() => setOpen(!open)}>
            <h2>Characters</h2>
          </Link>
          <Link href={"/episodes"} onClick={() => setOpen(!open)}>
            <h2>Episodes</h2>
          </Link>
          <Link href={"/locations"} onClick={() => setOpen(!open)}>
            <h2>Locations</h2>
          </Link>
        </Box>
      </Collapse>
    </div>
  );
};

export default MobileHeader;
