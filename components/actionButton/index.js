import React from "react";
import Link from "next/link";
import styles from "./actionButton.module.scss";

const ActionButton = ({url, label, buttonStyle}) => {
    return (
        <Link href={url} passHref>
            <a className={`${styles.button} ${buttonStyle}`}>{label}</a>
        </Link>
    );
}

export default ActionButton;
