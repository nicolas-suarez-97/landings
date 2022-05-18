import React from "react";
import styles, {
    hook__content,
    hook__actionButton
} from "./hook.module.scss";
import ActionButton from "../../../components/actionButton";

const HookSection = ({hook}) => {
    const {title, content, buttonLabel, buttonAction} = hook;
    return (
        <section className={styles.hook}>
            <h2 className={styles.title}>{title}</h2>
            <p className={hook__content} dangerouslySetInnerHTML={{__html: content}} />
            <ActionButton
                url={buttonAction}
                label={buttonLabel}
                buttonStyle={hook__actionButton}
            />
        </section>
    );
}

export default HookSection;