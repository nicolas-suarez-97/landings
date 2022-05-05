import React from "react";
import styles from "./hook.module.scss";
import ActionButton from "../../../components/actionButton";

const HookSection = ({hook}) => {
    const {title, content, buttonLabel, buttonAction} = hook;
    return (
        <div className={styles.hook}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.hook__content}>{content}</p>
            <ActionButton
                url={buttonAction}
                label={buttonLabel}
                buttonStyle={styles.hook__actionButton}
            />
        </div>
    );
}

export default HookSection;