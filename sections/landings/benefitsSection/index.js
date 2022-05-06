import React from "react";
import styles, {
    benefits__images,
    benefits__item,
    benefits__list,
    benefits__content,
    benefits__imagesContainer,
    topImage,
    bottomImage,
} from "./benefits.module.scss";

const BenefitsSection = ({benefits}) => {
    const {title, certificateUrl, warrantyUrl, benefitsList} = benefits;
    return (
        <section>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.benefits}>
                <div className={benefits__imagesContainer}>
                    <div className={benefits__images}>
                        <img src={certificateUrl} alt="" className={topImage}/>
                        <img src={warrantyUrl} alt="" className={bottomImage}/>
                    </div>
                </div>
                <div className={benefits__content}>
                    <ul className={benefits__list}>
                        {benefitsList.map((benefit, index) => (
                            <li key={index} className={benefits__item}><span className="material-icons">{benefit.icon}</span>{benefit.label}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

    );
}

export default BenefitsSection;
