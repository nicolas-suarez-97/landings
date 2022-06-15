import React from "react";
import Link from "next/link";
import {
    footer,
    footer__options,
    divider,
    legal
} from "./footer.module.scss";

const Footer = ({footerOptions}) => {

    return (
        <div className={footer}>
            <ul className={footer__options}>
                {footerOptions.map(i => (
                    <li key={i}><Link href={`/${i}`}>{i}</Link></li>
                ))}
            </ul>
            <div className={divider}/>
            <p className={legal}>
                <b>Aviso legal: "</b> Este producto se comercializa con el apoyo de Hotmart. La plataforma no realiza un
                control editorial previo de los productos ofertados, ni evalúa el tecnicismo o la experiencia de
                quienes los elaboran. La existencia de un producto y su adquisición, a través de la plataforma, no
                puede considerarse garantía de calidad de contenido y resultado, en ningún caso. Al adquirirlo, el
                comprador declara conocer esta información. Puedes acceder a los términos y políticas de Hotmart <a href="https://hotmart.com/es/legal" target="_blank" rel="noreferrer">aquí</a>,
                incluso antes de finalizar la compra. <b>"</b>
            </p>
        </div>
    );
}

export default Footer;