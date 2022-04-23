import Head from "next/head"
import Link from "next/link"
import Header from '../components/header/header'
function Layout({ children, logo, menu }) {
    return (
        <>
            <Head>
                <link
                    rel="preload"
                    href="/fonts/source-sans/SourceSansPro-Regular.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/source-sans/SourceSansPro-SemiBold.ttf"
                    as="font"
                    crossOrigin=""
                />
            </Head>
            <Header logo={logo} menu={menu} />
            <main >
                {children}
            </main>
            <footer>
            </footer>
        </>
    )
}

export default Layout