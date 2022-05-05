import React, {useState} from "react";
import styles from "./modules.module.scss";

const ModulesSection = ({modules}) => {
    const {title, steps, itemsIcon} = modules;

    return (
        <>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.modules__container}>
                <div>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.modules__content}>
                            <h4 className={`${styles.modules__title}`}>{step.title}</h4>
                            <ul className={`${styles.modules__list}`}>
                                {step.items.map((item) => (
                                    <li key={item} className={styles.modules__item}>
                                        <span className="material-icons">{itemsIcon}</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    {steps.length > 0 ?
                        <div className={styles.modules__content}>
                            <span className={styles.modules__title} />
                        </div>
                        : null
                    }
                </div>
            </div>
        </>
    );
}

export default ModulesSection;