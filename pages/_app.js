
import '../styles/globals.scss'
import NextProgress from "next-progress";

function MyApp({ Component, pageProps }) {
    return(
    <>
     <NextProgress delay={300} options={{ showSpinner: true }} />
    <Component {...pageProps} />
    </> )
}
export default MyApp;
