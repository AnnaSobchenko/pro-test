import { React } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Icons from "../../images/symbol-defs.svg";
import s from "./AppBar.module.scss";
import MediaQuery from "react-responsive";
import { useSelector } from "react-redux";
// import { getInfo } from "../../redux/auth/authOperations";
import { getUserInfo } from "../../utils/fetchApi";

const AppBar = () => {
  // const userInfo = useSelector((state) => state.auth.user.email);
  // console.log(userInfo);
  // const letterInfo = userInfo.slice(0, 1);

  return (
    <>
      <header className={s.header}>
        <div className={s.logo}>
          <NavLink to="/">
            <svg className={s.navIcon} width="129px" height="28px">
              <use xlinkHref={`${Icons}#icon-logo`} />
            </svg>
          </NavLink>
        </div>
        <div className={s.header_navLink}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? s.activeStyle : s.link)}
          >
            Home
          </NavLink>
          <NavLink
            to="/materials"
            className={({ isActive }) => (isActive ? s.activeStyle : s.link)}
          >
            Materials
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? s.activeStyle : s.link)}
          >
            Contacts
          </NavLink>
        </div>
        <>
          <div className={s.flex}>
            <div className={s.name_wrapper}>
              <div className={s.letter_wrapper}>
                {/* {letterInfo && (
                  <span className={s.firs_letter}>{letterInfo}</span>
                )} */}
              </div>
              {/* {userInfo && <span className={s.name}>{userInfo}</span>} */}
            </div>
          </div>

          <MediaQuery maxWidth={767}>
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
      <Outlet className="container" />
    </>
  );
};

export default AppBar;
