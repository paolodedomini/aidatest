import style from './mainbuttons.module.scss'

function MainButton({ menuOpen, setMenuOpen }) {


    return (
        <ul className={style.mainButtons}>
            {!menuOpen && <li>login</li>}
            {!menuOpen && <li onClick={() => setMenuOpen(true)}>Menu</li>}
            {menuOpen && <li onClick={() => setMenuOpen(false)}>close</li>}
        </ul>
    )
}

export default MainButton