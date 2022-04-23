import styles from '../styles/Home.module.css'
import { frontpageData, menuData } from '../lib/queries'
import Layout from '../layout/layout'
import SliderHome from '../components/slider/sliderHome'
function Home({ dataHome, menu }) {
  const slidesImages = dataHome.partials[0].resources
  const textSlides = dataHome.partials[0].payload.slides

  const slides = slidesImages.map((item, index) => {
      return { imgs: item, text: textSlides[index] }
    })
  slides.pop()
  return (
    <Layout logo={dataHome.mainImage.images[0].fullPath} menu={menu}>
      <section className='blocco_0'>
        <SliderHome slides={slides} />
      </section>
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