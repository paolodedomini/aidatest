import Head from "next/head"
import {motion} from 'framer-motion'
import Header from '../components/header/header'
function Layout({ children, menu, home, router }) {
    
    const variants = {
        hidden: { opacity: 0, },
        enter: { opacity: 1 },
        exit: { opacity: 0 },
    }
    
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
            <motion.main 
            variants={variants} // Pass the variant object into Framer Motion 
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: 'linear' }} // Set the transition to linear
            >
                {children}
            </motion.main>
            <footer>
            </footer>
        </>
    )
}

export default Layout