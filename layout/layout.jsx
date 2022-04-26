import Head from "next/head"
import Header from '../components/header/header'
function Layout({ children, menu, home, router }) {
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
            <Header  menu={menu} home={home} router={router} />
            <main >
                {children}
            </main>
            <footer>
            </footer>
        </>
    )
}

export default Layout