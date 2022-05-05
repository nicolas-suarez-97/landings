import React from "react";
import styles from "./faq.module.scss";
import FaqComponent from "../../../components/faqComponent";

const FaqSection = ({faq}) => {
    const {title, items} = faq;
    return (
        <>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.faq}>
                {items.map((item, index) => (
                    <FaqComponent key={index} item={item} />
                ))}
            </div>
        </>
    );
}

export default FaqSection;