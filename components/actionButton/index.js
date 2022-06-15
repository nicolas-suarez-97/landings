import React from "react";
import styles from "./actionButton.module.scss";
import * as ga from '../../lib/ga';

const ActionButton = ({linkData}) => {
    const {url, label, buttonStyle, onClickAction, course} = linkData;
    const gaEvent = {
        action: 'button_click',
        params: {
            'link': url,
            'label': label,
            'page_name': '/cursos/' + course,
        },
    }

    return onClickAction !== undefined ?
        (
            <a
                onClick={() => {
                    onClickAction(true)
                    ga.event(gaEvent)
                }}
                className={`${styles.button} ${buttonStyle}`}
                target="_blank"
                rel="noreferrer"
            >
                {label}
            </a>
        ) : (
            <a
                href={url}
                className={`${styles.button} ${buttonStyle}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                    ga.event(gaEvent)
                }}
            >
                {label}
            </a>
        );
}

export default ActionButton;
