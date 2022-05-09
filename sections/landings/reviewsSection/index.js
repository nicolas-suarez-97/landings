import React, {useState} from "react";
import styles, {
    reviews__list,
    reviews__card,
    reviews__description,
    reviews__bottomSection,
    reviews__picture,
    reviews__author,
    reviews__pause,
    gradient,
} from "./reviews.module.scss";

const ReviewsSection = ({reviews}) => {
    const {title, items} = reviews;
    const [pause, setPause] = useState(false);

    const togglePause = () => {
        pause
            ? setPause(false)
            : setPause(true)
    }

    return (
        <section>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.reviews}>
                <div className={`${reviews__list} ${pause ? styles.pause : null}`}>
                    {items.map((item, index) => (
                        <div key={index} className={reviews__card}>
                            <div>
                                <i className="material-icons">format_quote</i>
                                <p className={reviews__description}>{item.review}</p>
                            </div>
                            <div className={reviews__bottomSection}>
                                <img src={item.authorPicture} alt="" className={reviews__picture}/>
                                <h3 className={reviews__author}>{item.author}</h3>
                            </div>
                        </div>
                    ))}
                    {items.map((item, index) => (
                        <div key={index} className={reviews__card}>
                            <div>
                                <i className="material-icons">format_quote</i>
                                <p className={reviews__description}>{item.review}</p>
                            </div>
                            <div className={reviews__bottomSection}>
                                <img src={item.authorPicture} alt="" className={reviews__picture}/>
                                <h3 className={reviews__author}>{item.author}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={`${gradient} ${styles.right}`}/>
                <div className={`${gradient} ${styles.left}`}/>
            </div>
            <div className={reviews__pause} onClick={togglePause}>
                <a className="material-icons">{pause ? 'play_arrow' : 'pause'}</a>
            </div>
        </section>
    );
}

export default ReviewsSection;