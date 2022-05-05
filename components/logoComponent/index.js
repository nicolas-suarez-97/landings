import React from "react";
import styles from "./logo.module.scss"
import Link from "next/link";

const Logo = ({title}) => {
    return (
        <Link href='/' passHref>
            <a className={styles.logo}>
                <h1>{title}</h1>
            </a>
        </Link>
    );
}

export default Logo;