import React from "react";
import styles, {
    title,
    achievement__content,
    achievement__items,
} from "./achievement.module.scss";

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
        <section>
            <h2 className={title}>{achievement.title}</h2>
            <ul className={achievement__content}>
                {achievement.items.map((i, index) => (
                    <li key={index} className={achievement__items}>
                        {i.icon
                            ? <span className={`material-icons ${colors[index]}`}>{i.icon}</span>
                            : null
                        }
                        <p dangerouslySetInnerHTML={{__html: i.label}}/>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default AchievementsSection;