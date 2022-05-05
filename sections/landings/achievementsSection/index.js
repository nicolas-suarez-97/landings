import React from "react";
import styles from "./achievement.module.scss";

const AchievementsSection = ({achievement}) => {
    const {yellow, blue, green, purple, lightBlue, red} = styles;
    const colors = [
        yellow,
        blue,
        green,
        red,
        purple,
        lightBlue,
    ]

    return (
        <>
            <h2 className={styles.title}>{achievement.title}</h2>
            <ul className={styles.achievement__content}>
                {achievement.items.map((i, index) => (
                    <li key={index} className={styles.achievement__items}>
                        {i.icon
                            ? <span className={`material-icons ${colors[index]}`}>{i.icon}</span>
                            : null
                        }
                        {i.label}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default AchievementsSection;