import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Icons from "../../images/symbol-defs.svg";
import s from "./AppBar.module.scss";
import MediaQuery from "react-responsive";


const AppBar = () => {
  return (
    <>
      <header className={`${s.header} ${s.container}`}>
        <div className={s.logo}>
          <NavLink to="/">
            <svg className={s.navIcon} width="129px" height="28px">
              <use xlinkHref={`${Icons}#icon-logo`} />
            </svg>
          </NavLink>
        </div>
        <div className={s.header_navLink}>
        <NavLink to="/" className={s.link} >
          Home
        </NavLink>
        <NavLink to="material" className={s.link} activeClassName={s.activLink}>
          Materials
        </NavLink>
        <NavLink to="contacts" className={s.link} activeClassName={s.activLink}>
          Contacts
        </NavLink>
        </div>
     


        <>
          

            <div className={s.flex}>
              <div className={s.name_wrapper}>
              <div  className={s.letter_wrapper}>
              <span className={s.firs_letter}>{/*firsLetter*/ "Q"}</span>
              </div>
            <span className={s.name}>{"Qwerty"}</span>
            </div>
            </div>
          
            <MediaQuery maxWidth={766}>
          <NavLink to="*">
            <div className={s.navIconMenu_wrapper}>
            <svg className={s.navIconMenu} width="20px" height="20px">
              <use xlinkHref={`${Icons}#icon-menu`} />
            </svg>
            </div>
          </NavLink>
          </MediaQuery>

          <MediaQuery minWidth={768}>
          <NavLink to="*">
          <div className={s.navIconMenu_wrapper}>
            <svg className={s.navIcon_signOut} width="16px" height="16px">
              <use xlinkHref={`${Icons}#icon-sign-out`} />
            </svg>
            </div>
          </NavLink>
      </MediaQuery>


      
        </>
      </header>
      <Outlet />
      <div className={s.header_bottom_line}></div>
    </> 
  );
};

export default AppBar;
