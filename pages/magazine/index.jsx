import { menuData, magazineData } from '../../lib/queries'
import Layout from '../../layout/layout'
import SezioneMagazine from '../../components/sezioneMagazine/sezioneMagazine'
function magazine({magazine, menu}) {
    const datiBlocco6 = magazine.data
    return (
        <Layout menu={menu}>
                <SezioneMagazine dati={datiBlocco6} />
        </Layout>
    )
}
export async function getServerSideProps(context) {
    const [menuRes, magRes] = await Promise.all([
        fetch(menuData('it')),
        fetch(magazineData('it'))
    ]);

    const [menu, magazine] = await Promise.all([
        menuRes.json(),
        magRes.json()
    ]);

    return { props: { menu, magazine } };


}
export default magazine