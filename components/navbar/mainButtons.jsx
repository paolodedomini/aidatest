import style from './mainbuttons.module.scss'
import { GrMenu, GrClose } from "react-icons/gr";
function MainButton({ menuOpen, setMenuOpen }) {
    return (
        <ul className={style.mainButtons}>
            {!menuOpen && <li>login</li>}
            {!menuOpen && <li className={style.menubtn} onClick={() => setMenuOpen(true)}>
                <GrMenu /></li>}
            {menuOpen && <li className={style.closebtn} onClick={() => setMenuOpen(false)}>
                <GrClose /></li>}
        </ul>
    )
}

export default MainButton