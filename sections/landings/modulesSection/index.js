import React, {useRef, useState} from "react";
import styles, {
    modules__container,
    modules__content,
    modules__list,
    modules__title,
    modules__item,
    modules__shadow,
    reduce,
} from "./modules.module.scss";

const ModulesSection = ({modules}) => {
    const {title, steps, itemsIcon} = modules;
    const [expand, setExpand] = useState(false);
    const ref = useRef(null);
    const scroll = () => ref.current.scrollIntoView();

    const toggleExpand = () => {
        if (expand) {
            setExpand(false)
            scroll()
        } else {
            setExpand(true)
        }

    }

    return (
        <section className={styles.modules} ref={ref}>
            <h2 className={styles.title} id="modules">{title}</h2>
            <div className={`${modules__container} ${expand ? '' : reduce}`}>
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
                            <span className={modules__title}/>
                        </div>
                        : null
                    }
                </div>
                <div className={`${modules__shadow} ${expand ? styles.expand : ''}`}/>
            </div>
            <div className={styles.modules__icon}><span
                className={`material-icons ${expand ? styles.rotateOn : styles.rotateOff}`}
                onClick={toggleExpand}>expand_more</span></div>
        </section>
    );
}

export default ModulesSection;