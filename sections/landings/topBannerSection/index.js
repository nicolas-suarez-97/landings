import React from "react";
import styles, {
    banner__moreButton,
    banner__background,
    banner__content,
    banner__subtitle,
    banner__title,
    banner__video,
    banner__buttonRow,
    banner__button,
    circle,
} from "./topBanner.module.scss";
import ActionButton from "../../../components/actionButton";

const TopBannerSection = ({videoUrl, banner}) => {
    const {title, subtitle, backgroundImage, isCircle, primaryButtonLabel, primaryButtonAction, secondaryButtonLabel, secondaryButtonAction} = banner;
    return (
        <section className={styles.banner}>
            <div className={banner__content}>
                <h1 className={banner__title}>{title}</h1>
                <h2 className={banner__subtitle}>{subtitle}</h2>
                <div className={banner__buttonRow}>
                    <ActionButton
                        url={primaryButtonAction}
                        label={primaryButtonLabel}
                        buttonStyle={banner__button}
                    />
                    <div className={banner__moreButton}>
                        <span className="material-icons">play_arrow</span>
                        <ActionButton
                            url={secondaryButtonAction}
                            label={secondaryButtonLabel}
                        />
                    </div>
                </div>
            </div>
            { backgroundImage ? <img alt="" src={backgroundImage} className={`${banner__background} ${isCircle ? circle : null}`}/> : null }

            { videoUrl ? <iframe className={banner__video} src={videoUrl} /> : null }
        </section>
    );
}

export default TopBannerSection;