import React from "react";
import Link from "next/link";
import {
    container,
    container__options,
    container__search,
} from './header.module.scss';
import {PageType} from "../../utils/constants";
import Logo from "../../components/logoComponent";

const Header = ({title, options, placeholder, pageType}) => {

    return (
        <>
            <div className={container}>
                <Logo
                    title={title}
                />
                <ul className={container__options}>
                    {options.map(o => (
                        <li key={o.path}><Link href={o.path}>{o.label}</Link></li>
                    ))}
                </ul>
                {
                    pageType !== PageType.LANDING
                        ? (
                            <div className={container__search}>
                                <span className="material-icons">search</span>
                                <input type="text" placeholder={placeholder}/>
                            </div>
                        ) : null
                }

            </div>
        </>
    );
}

export default Header;