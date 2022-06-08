import { React } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Icons from "../../images/symbol-defs.svg";
import s from "./AppBar.module.scss";
import MediaQuery from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authOperations";
// import { getInfo } from "../../redux/auth/authOperations";
// import { getUserInfo } from "../../utils/fetchApi";

const AppBar = () => {
  const userInfo = useSelector((state) => state.auth.user.email);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // console.log(userInfo);
  // const letterInfo = userInfo.slice(0, 1);
  const dispatch = useDispatch();

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
          {isLoggedIn && (
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? s.activeStyle : s.link)}
            >
              Home
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink
              to="/materials"
              className={({ isActive }) => (isActive ? s.activeStyle : s.link)}
            >
              Materials
            </NavLink>
          )}
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? s.activeStyle : s.link)}
          >
            Contacts
          </NavLink>
        </div>
        {isLoggedIn && (
          <>
            <div className={s.flex}>
              <div className={s.name_wrapper}>
                <div className={s.letter_wrapper}>
                  {userInfo.slice(0, 1) && (
                    <span className={s.firs_letter}>
                      {userInfo.slice(0, 1)}
                    </span>
                  )}
                </div>

                {userInfo && (
                  <div className={s.text_transform}>
                    {" "}
                    <span className={`${s.name} ${s.animation__scss}`}>
                      {userInfo}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <MediaQuery maxWidth={767}>
              <NavLink onClick={() => dispatch(logout())} to="auth">
                <div className={s.navIconMenu_wrapper}>
                  <svg className={s.navIconMenu} width="20px" height="20px">
                    <use xlinkHref={`${Icons}#icon-menu`} />
                  </svg>
                </div>
              </NavLink>
            </MediaQuery>

            <MediaQuery minWidth={768}>
              <NavLink
                to="auth"
                onClick={() => {
                  dispatch(logout());
                }}
              >
                <div className={s.navIconMenu_wrapper}>
                  <svg className={s.navIcon_signOut} width="16px" height="16px">
                    <use xlinkHref={`${Icons}#icon-sign-out`} />
                  </svg>
                </div>
              </NavLink>
            </MediaQuery>
          </>
        )}
      </header>
      <Outlet className="container" />
    </>
  );
};

export default AppBar;
