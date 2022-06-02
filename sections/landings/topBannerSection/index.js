import React, {useEffect, useRef, useState} from "react";
import styles, {
    banner__moreButton,
    banner__background,
    banner__content,
    banner__subtitle,
    banner__title,
    banner__video,
    banner__buttonRow,
    banner__button,
    banner__mobileBackground,
    circle,
} from "./topBanner.module.scss";
import ActionButton from "../../../components/actionButton";
import VideoComponent from "../../../components/videoComponent";

const TopBannerSection = ({videoUrl, banner, linkData}) => {
    const {title, subtitle, backgroundImage, isCircle, primaryButtonLabel, secondaryButtonLabel} = banner;
    const {url, discount, setIsModalOpen} = linkData
    const [play, setPlay] = useState(false);
    const videoSectionRef = useRef(null);

    const scrollToVideo = () => {
        console.log(videoSectionRef.current.getBoundingClientRect())
        window.scroll({
            top: videoSectionRef.current.getBoundingClientRect().top - 50,
            behavior: "smooth"
        })
        setPlay(true)
    };

    return (
        <>
            <section className={styles.banner}>
                <div className={banner__content}>
                    <h1 className={banner__title}>{title}</h1>
                    <h2 className={banner__subtitle}>{subtitle}</h2>
                    <img alt="" src={backgroundImage} className={`${banner__mobileBackground} ${isCircle ? circle : null}`}/>
                    <div className={banner__buttonRow}>
                        <ActionButton
                            url={url}
                            label={primaryButtonLabel}
                            buttonStyle={banner__button}
                            onClickAction={setIsModalOpen}
                        />
                        <div className={banner__moreButton}>
                            <span className="material-icons">play_arrow</span>
                            <a
                                onClick={scrollToVideo}
                            >{secondaryButtonLabel}</a>
                        </div>
                    </div>
                </div>
                <img alt="" src={backgroundImage} className={`${banner__background} ${isCircle ? circle : null}`}/>
            </section>
            { videoUrl
                ? (
                    <section
                        ref={videoSectionRef}
                    >
                        <VideoComponent
                            videoUrl={videoUrl}
                            play={play}
                            setPlay={setPlay}
                        />
                    </section>
                )
                : null}
        </>

    );
}

export default TopBannerSection;