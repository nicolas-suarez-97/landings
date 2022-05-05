import React from "react";
import styles from "./video.module.scss";

const VideoComponent = ({videoUrl}) => {
    return (
        <iframe className={styles.video} src={videoUrl}/>
    );
}

export default VideoComponent;