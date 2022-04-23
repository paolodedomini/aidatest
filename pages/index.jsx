import styles from '../styles/Home.module.css'
import { frontpageData, menuData } from '../lib/queries'
import Layout from '../layout/layout'

function Home({ dataHome, menu }) {
  return (
    <Layout logo={dataHome.mainImage.images[0].fullPath} menu={menu}>
      <h1>{dataHome.title}</h1>
    </Layout>
  )
}


export async function getServerSideProps(context) {

  const [dataHomeRes, menuRes] = await Promise.all([
    fetch(frontpageData('it')), 
    fetch(menuData('it'))
  ]);
  const [dataHome, menu] = await Promise.all([
    dataHomeRes.json(), 
    menuRes.json()
  ]);

  return { props: { dataHome, menu } };


}

export default Home