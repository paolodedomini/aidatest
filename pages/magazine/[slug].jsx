import {menuData, magazineData } from '../../lib/queries'
import { useRouter } from 'next/router'
import Layout from '../../layout/layout'
const MagazinePage = ({magazine, menu}) => {
    
    const router = useRouter()
    const { slug } = router.query
    const dataSingoloArticolo = magazine.data.find((item)=> item.slug === slug)
console.log('router', router);
    return (
    
    <Layout menu={menu} router={router}>
        <p>{dataSingoloArticolo.title}</p>
    </Layout>
    )
  }
  

  export async function getServerSideProps(context) {

    const [menuRes, magRes] = await Promise.all([
      fetch(menuData('it')),
      fetch(magazineData('it'))
  
    ]);
    const [ menu, magazine] = await Promise.all([
      menuRes.json(),
      magRes.json()
    ]);
  
    return { props: { menu, magazine } };
  
  
  }
  export default MagazinePage
