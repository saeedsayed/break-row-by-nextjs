import React from "react";
import style from "./MainButton.module.css";
import Link from "next/link";


const MainButton = ({ children, to, ...rest }) => {
  return to ? (
    <button {...rest} className={style.mainButton}>
      <Link href={to}> {children}</Link>
    </button>
  ) : (
    <button {...rest} className={style.mainButton}>
      {children}
    </button>
  );
};

export default MainButton;
