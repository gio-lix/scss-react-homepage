import React, {useCallback, useEffect, useRef, useState} from 'react';
import "./Header.scss"
import {classNames} from "../../utils/classes";
import {navigations} from '../../data'
import Links from "../link/Links";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleRef = useRef()

    const lockScroll = useCallback(() => {
        document.body.style.overflow = 'hidden';
    }, [])

    const unlockScroll = useCallback(() => {
        document.body.style.overflow = '';
    }, [])

    useEffect(() => {
        if (isOpen) {
            lockScroll()
        } else {
            unlockScroll()
        }
    }, [isOpen]);




    useEffect(() => {
        document.body.addEventListener('click', handlePopUp)
        return () => document.body.removeEventListener('click',handlePopUp)
    },[])
    const handlePopUp = (e) => {
        if (!e.path.includes(toggleRef.current)) {
            setIsOpen(false)
        }
    }

    return (
        <header className={classNames('header ', isOpen ? "open " : "")}>
            <div className={classNames("overlay", isOpen ? "fade-in " : "fade-out ")}></div>
            <nav className='container container--pall flex flex-jc-sb'>
                <Links
                    path={"/"}
                    title={<img src="/logo.svg" alt="logo"/>}
                    className={"header__logo"}
                />
                <a
                    ref={toggleRef}
                    onClick={() => setIsOpen(!isOpen)}
                    className={classNames("header__toggle", "hide-for-desktop")}>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>

                <div className="header__links hide-for-mobile ">
                    {navigations.map(navigation => (
                        <Links
                            path={navigation.path}
                            title={navigation.title}
                            key={navigation.id}
                        />
                    ))}
                </div>

                <button className='button hide-for-mobile' type="button">Request Invite</button>
            </nav>
            {isOpen && (
                <div className={classNames("header__menu container", isOpen ? "fade-in " : "fade-out ")}>
                    {navigations.map(navigation => (
                        <Links
                            key={navigation.id}
                            path={navigation.path}
                            title={navigation.title}
                        />
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;