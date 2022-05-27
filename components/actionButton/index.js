import React from "react";
import styles from "./actionButton.module.scss";

const ActionButton = ({url, label, buttonStyle, onClickAction}) => {

    return onClickAction !== undefined ?
        (
            <a
                onClick={() => onClickAction(true)}
                className={`${styles.button} ${buttonStyle}`}
                target="_blank"
                rel="noreferrer"
            >
                {label}
            </a>
        ) : (
            <a
                href={url}
                className={`${styles.button} ${buttonStyle}`}
                target="_blank"
                rel="noreferrer"
            >
                {label}
            </a>
        );
}

export default ActionButton;
