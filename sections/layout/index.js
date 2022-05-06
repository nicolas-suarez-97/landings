import React from "react";
import Head from "next/head";
import Header from "../header";
import Footer from "../footer";
import styles from "./layout.module.scss";
import {PageType} from "../../utils/constants";

const Layout = props => {
    const headerOptions = [
        {path: "/", label: "Inicio"},
        {path: "/recetas", label: "Recetas"},
        {path: "/cursos", label: "Cursos"},
    ];

    const landingOptions = [
        {path: props.courseUrl, label: "Ingreso al Curso"},
        {path: "/cursos", label: "Más Cursos"},
    ];
    const footerOptions = [
        'nosotros',
        'contacto',
        'terminos',
        'faq',
    ];

    return (
        <div className={styles.container}>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"/>
            </Head>
            <Header
                title="Preparalo en Casa"
                options={props.pageType === PageType.LANDING ? landingOptions : headerOptions}
                placeholder="Buscar ..."
                pageType={props.pageType}
            />
            <main className={`${styles.layout} ${props.layoutStyle}`}>
                {props.children}
            </main>
            <Footer
                footerOptions={footerOptions}
            />
        </div>
    );
}

export default Layout;