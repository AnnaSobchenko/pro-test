import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Icons from "../../images/symbol-defs.svg";
import s from "./AppBar.module.scss";

const AppBar = () => {
  return (
    <>
      <header className={s.header}>
        <>
          <NavLink to="/">
            <svg className={s.navIcon} width="129px" height="28px">
              <use xlinkHref={`${Icons}#icon-logo`} />
            </svg>
          </NavLink>
        </>
        <NavLink to="/" className={s.link} >
          Home
        </NavLink>
        <NavLink to="material" className={s.link} activeClassName={s.activLink}>
          Materials
        </NavLink>
        <NavLink to="contacts" className={s.link} activeClassName={s.activLink}>
          Contacts
        </NavLink>
        <>
          

            <div className={s.letter_wrapper}>
              <div  className={s.circle_wrapper}>
              <span className={s.firs_letter}>{/*firsLetter*/ "Q"}</span>
              </div>
            <span className={s.name}>{"Qwerty"}</span>
            </div>
          

          <NavLink to="*">
            <div>
            <svg className={s.navIconMenu} width="20px" height="20px">
              <use xlinkHref={`${Icons}#icon-menu`} />
            </svg>
            </div>
          </NavLink>
          
          <NavLink to="*">
            <svg className={s.navIconMenu} width="16px" height="16px">
              <use xlinkHref={`${Icons}#icon-sign-out`} />
            </svg>
          </NavLink>
        </>
      </header>
        <div className={s.header_bottom_line}></div>
      <Outlet />
    </>
  );
};

export default AppBar;
