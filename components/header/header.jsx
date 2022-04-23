import { useState } from 'react'
import LogoHome from '../logoHome/logoHome'
import Navbar from '../navbar/navbar'
import MainButtons from '../navbar/mainButtons'
function Header({ logo, menu }) {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <header  className="main-container" >
            <div className="main-head">
                <LogoHome logo={logo}  menuOpen={menuOpen}/>
                <MainButtons menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </div>
            <Navbar menu={menu} menuOpen={menuOpen}/>
        </header>
    )
}

export default Header