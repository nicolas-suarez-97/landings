import React from "react";
import styles from "./producer.module.scss";

const ProducerSection = ({producer}) => {
    const {title, description} = producer
    return (
        <>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.content}>{description}</p>
        </>
    );
}

export default ProducerSection;