import React from "react";
import styles from "./actionButton.module.scss";
import * as ga from '../../lib/ga';

const ActionButton = ({url, label, buttonStyle, onClickAction}) => {

    const gaEvent = {
        action: 'button_click',
        params: {
            'link': url,
            'label': label
        },
    }

    return onClickAction !== undefined ?
        (
            <a
                onClick={() => {
                    onClickAction(true)
                    ga.event(gaEvent)
                    ga.pageview(url)
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
                    ga.pageview(url)
                }}
            >
                {label}
            </a>
        );
}

export default ActionButton;
