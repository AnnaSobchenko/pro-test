import { NavLink } from "react-router-dom";
import s from "./BurgerMenu.module.scss";
import Icons from "../../images/symbol-defs.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authOperations";

const BurgerMenu = ({ closeModal }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  return (
    <div className={s.wrapper}>
      <div className={s.mobileHeader }>
        <NavLink to="/" onClick={() => closeModal(true)}>
          <svg className={s.navIcon} width="129px" height="28px">
            <use xlinkHref={`${Icons}#icon-logo`} />
          </svg>
        </NavLink>
        <button
          onClick={() => closeModal(true)}
          className={s.mobileHeader_close_btn}
        >
          <svg className={s.navIconMenu} width="20px" height="20px">
            <use xlinkHref={`${Icons}#icon-close`} />
          </svg>
        </button>
      </div>
      <div className={s.header_navLink}>
        {isLoggedIn && (
          <div className={s.header_navLink_item}>
            <NavLink
              onClick={() => closeModal(true)}
              to="/"
              className={({ isActive }) => (isActive ? s.activeStyle : s.link)}
            >
              Home
            </NavLink>
          </div>
        )}
        {isLoggedIn && (
          <div className={s.header_navLink_item}>
            <NavLink
              onClick={() => closeModal(true)}
              to="/materials"
              className={({ isActive }) => (isActive ? s.activeStyle : s.link)}
            >
              Materials
            </NavLink>
          </div>
        )}
        <div className={s.header_navLink_item}>
          <NavLink
            onClick={() => closeModal(true)}
            to="/contacts"
            className={({ isActive }) => (isActive ? s.activeStyle : s.link)}
          >
            Contacts
          </NavLink>
        </div>

        {isLoggedIn && (
          <div className={s.header_navLink_item}>
            <NavLink
              to="auth"
              onClick={() => {
                dispatch(logout());
                closeModal(true);
              }}
            >
              <div className={s.navIconMen}>
                <svg className={s.navIcon_signOut} width="16px" height="16px">
                  <use xlinkHref={`${Icons}#icon-sign-out`} />
                </svg>
              </div>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default BurgerMenu;
