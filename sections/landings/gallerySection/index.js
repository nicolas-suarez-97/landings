import React from "react";
import styles, {
    gallery__container,
    gallery__image,
} from "./gallery.module.scss";

const GallerySection = ({gallery}) => {
    const {title, images} = gallery;
    return (
        <section className={styles.gallery}>
            <h1 className={styles.title}>{title}</h1>
            <div className={gallery__container}>
                {images.map((image, index)=> (
                    <img key={index} src={image} className={gallery__image} alt="" />
                ))}
            </div>
        </section>
    );
}

export default GallerySection;