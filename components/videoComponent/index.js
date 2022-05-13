import React, {useEffect, useState} from "react";
import styles from "./video.module.scss";
import ReactPlayer from 'react-player'

const VideoComponent = ({videoUrl, play, setPlay}) => {
    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);

    return (
        <section className={styles.video}>
            { hasWindow
                ? <ReactPlayer
                    url={videoUrl}
                    playing={play}
                    onPause={setPlay(false)}
                    width="100%"
                    height="100%"
                />
                : null
            }
        </section>
    );
}

export default VideoComponent;