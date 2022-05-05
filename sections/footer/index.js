import React from "react";
import Link from "next/link";
import styles from "./footer.module.scss";

const Footer = ({footerOptions}) => {

    return (
        <div className={styles.footer}>
            <ul className={styles.footer__options}>
                {footerOptions.map(i => (
                    <li key={i}><Link href={`/${i}`}>{i}</Link></li>
                ))}
            </ul>
            <div className={styles.divider}/>
            <p className={styles.legal}>
                Aviso legal: “Este producto se comercializa con el apoyo de Hotmart. La plataforma no realiza un
                control editorial previo de los productos ofertados, ni evalúa el tecnicismo o la experiencia de
                quienes los elaboran. La existencia de un producto y su adquisición, a través de la plataforma, no
                puede considerarse garantía de calidad de contenido y resultado, en ningún caso. Al adquirirlo, el
                comprador declara conocer esta información. Puedes acceder a los términos y políticas de Hotmart aquí,
                incluso antes de finalizar la compra.
            </p>
        </div>
    );
}

export default Footer;