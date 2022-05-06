import React, {useState} from "react";
import styles, {
    modules__container,
    modules__content,
    modules__list,
    modules__title,
    modules__item,
} from "./modules.module.scss";

const ModulesSection = ({modules}) => {
    const {title, steps, itemsIcon} = modules;

    return (
        <section>
            <h2 className={styles.title}>{title}</h2>
            <div className={modules__container}>
                <div>
                    {steps.map((step, index) => (
                        <div key={index} className={modules__content}>
                            <h4 className={`${modules__title}`}>{step.title}</h4>
                            <ul className={`${modules__list}`}>
                                {step.items.map((item) => (
                                    <li key={item} className={modules__item}>
                                        <span className="material-icons">{itemsIcon}</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    {steps.length > 0 ?
                        <div className={modules__content}>
                            <span className={modules__title} />
                        </div>
                        : null
                    }
                </div>
            </div>
        </section>
    );
}

export default ModulesSection;