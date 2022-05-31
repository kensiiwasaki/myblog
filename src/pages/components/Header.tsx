import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.container}>
          <p>個人サイト</p>
          <div className={styles.mini_container}>
            <p>ポートフォリオ</p>
            <p>趣味ギャラリー</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
