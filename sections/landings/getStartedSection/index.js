import React from "react";
import styles, {
    getStarted__container,
    getStarted__content,
    getStarted__image,
    getStarted__subtitle,
    getStarted__title,
    getStarted__button,
} from "./getStarted.module.scss";
import ActionButton from "../../../components/actionButton";

const GetStartedSection = ({getStarted, linkData}) => {
    const {title, subtitle, imageUrl, buttonLabel} = getStarted;
    const {url, discount, setIsModalOpen} = linkData
    linkData = {
        ...linkData,
        buttonStyle: getStarted__button,
        label: buttonLabel
    }

    return (
        <section className={styles.getStarted}>
            <div className={getStarted__container}>
                <div className={getStarted__content}>
                    <h1 className={getStarted__title}>{title}</h1>
                    <h4 className={getStarted__subtitle}>{subtitle}</h4>
                    <ActionButton
                        linkData={linkData}
                    />
                </div>
                <div>
                    <img src={imageUrl} alt="" className={getStarted__image}/>
                </div>
            </div>
        </section>
    );
}

export default GetStartedSection;