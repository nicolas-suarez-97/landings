import React from "react";
import styles from "./logo.module.scss"
import Link from "next/link";

const Logo = ({title}) => {
    return (
        <a className={styles.logo}>
            <h1>{title}</h1>
        </a>
    );
}

export default Logo;