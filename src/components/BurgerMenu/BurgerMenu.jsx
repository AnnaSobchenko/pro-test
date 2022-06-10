import { NavLink } from "react-router-dom";
import s from './BurgerMenu.module.scss';
import Icons from '../../images/symbol-defs.svg';



const BurgerMenu = ({closeModal}) => {
    return ( 
        <div className={s.wrapper}>
            <div className={s.mobileHeader}>
          <NavLink to="/" onClick={()=>closeModal(true)}>
            <svg className={s.navIcon} width="129px" height="28px">
              <use xlinkHref={`${Icons}#icon-logo`} />
            </svg>
          </NavLink>
          <button onClick={()=>closeModal(true)}>
                <div className={s.navIconMenu_wrapper}>
                  <svg className={s.navIconMenu} width="20px" height="20px">
                    <use xlinkHref={`${Icons}#icon-close`} />
                  </svg>
                </div>
              </button>
        </div>  
        </div>
        
     );
}
 
export default BurgerMenu;