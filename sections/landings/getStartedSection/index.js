import React from "react";
import styles from "./getStarted.module.scss";
import ActionButton from "../../../components/actionButton";

const GetStartedSection = ({getStarted}) => {
    const {title, subtitle, imageUrl, buttonLabel, buttonAction} = getStarted;
    return (
        <div className={styles.getStarted}>
            <div className={styles.getStarted__container}>
                <div className={styles.getStarted__content}>
                    <h1 className={styles.getStarted__title}>{title}</h1>
                    <h4 className={styles.getStarted__subtitle}>{subtitle}</h4>
                    <ActionButton
                        label={buttonLabel}
                        url={buttonAction}
                        buttonStyle={styles.getStarted__button}
                    />
                </div>
                <div>
                    <img src={imageUrl} alt="" className={styles.getStarted__image}/>
                </div>
            </div>
        </div>
    );
}

export default GetStartedSection;