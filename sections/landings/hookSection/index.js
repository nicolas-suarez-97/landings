import React from "react";
import styles, {
    hook__content,
    hook__actionButton
} from "./hook.module.scss";
import ActionButton from "../../../components/actionButton";

const HookSection = ({hook, linkData}) => {
    const {title, content, buttonLabel} = hook;
    const {url, discount, setIsModalOpen} = linkData
    return (
        <section className={styles.hook}>
            <h2 className={styles.title}>{title}</h2>
            <p className={hook__content} dangerouslySetInnerHTML={{__html: content}} />
            <ActionButton
                url={url}
                label={buttonLabel}
                buttonStyle={hook__actionButton}
                onClickAction={setIsModalOpen}
            />
        </section>
    );
}

export default HookSection;