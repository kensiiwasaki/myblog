import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.container}>
          <p>豆まきブログ</p>
          <div className={styles.mini_container}>
            <p>ポートフォリオ(仮)</p>
            <p>趣味ギャラリー(仮)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
