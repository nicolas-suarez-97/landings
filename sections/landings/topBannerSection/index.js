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
    circle,
} from "./topBanner.module.scss";
import ActionButton from "../../../components/actionButton";
import VideoComponent from "../../../components/videoComponent";
import ReactPlayer from "react-player";

const TopBannerSection = ({videoUrl, banner}) => {
    const {title, subtitle, backgroundImage, isCircle, primaryButtonLabel, primaryButtonAction, secondaryButtonLabel, secondaryButtonAction} = banner;
    const [play, setPlay] = useState(false);
    const videoSectionRef = useRef(null);
    const [hasWindow, setHasWindow] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);

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
                    <div className={banner__buttonRow}>
                        <ActionButton
                            url={primaryButtonAction}
                            label={primaryButtonLabel}
                            buttonStyle={banner__button}
                        />
                        <div className={banner__moreButton}>
                            <span className="material-icons">play_arrow</span>
                            <a
                                onClick={scrollToVideo}
                            >{secondaryButtonLabel}</a>
                        </div>
                    </div>
                </div>
                { backgroundImage
                    ? <img alt="" src={backgroundImage} className={`${banner__background} ${isCircle ? circle : null}`}/>
                    : null
                }

            </section>
            { backgroundImage && videoUrl
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