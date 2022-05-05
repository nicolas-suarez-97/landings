import React from "react";
import styles from "./topBanner.module.scss";
import ActionButton from "../../../components/actionButton";

const TopBannerSection = ({videoUrl, banner}) => {
    const {title, subtitle, backgroundImage, primaryButtonLabel, primaryButtonAction, secondaryButtonLabel, secondaryButtonAction} = banner;
    return (
        <div className={styles.banner}>
            <div className={styles.banner__content}>
                <h1 className={styles.banner__title}>{title}</h1>
                <h2 className={styles.banner__subtitle}>{subtitle}</h2>
                <div className={styles.banner__buttonRow}>
                    <ActionButton
                        url={primaryButtonAction}
                        label={primaryButtonLabel}
                        buttonStyle={styles.banner__button}
                    />
                    <div className={styles.banner__moreButton}>
                        <span className="material-icons">play_arrow</span>
                        <ActionButton
                            url={secondaryButtonAction}
                            label={secondaryButtonLabel}
                        />
                    </div>
                </div>
            </div>
            { backgroundImage ? <img alt="" src={backgroundImage} className={styles.banner__background}/> : null }

            { videoUrl ? <iframe className={styles.banner__video} src={videoUrl} /> : null }
        </div>
    );
}

export default TopBannerSection;