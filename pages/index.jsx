import styles from '../styles/Home.module.scss'
import { frontpageData, menuData } from '../lib/queries'
import Layout from '../layout/layout'
import SliderHome from '../components/slider/sliderHome'
import HomeSwiperSlider from '../components/slider/swiperSlider'
import TestoImmagine from '../components/testoImmagine/testoImmagine'
import CallToAction from '../components/callToAction/callToAction'
function Home({ dataHome, menu }) {
  const slidesImages = dataHome.partials[0].resources
  const textSlides = dataHome.partials[0].payload.slides

  const datiBlocco2 = dataHome.partials[1]
  const datiBlocco3 = dataHome.partials[2]
  const datiBlocco4 = dataHome.partials[3]
  const datiBlocco5 = dataHome.partials[4]

  const slides = slidesImages.map((item, index) => {
    return {_id:item._id, imgs: item, text: textSlides[index] }
  })
  slides.pop()
  
  return (
    <Layout logo={dataHome.mainImage.images[0].fullPath} menu={menu}>

      <HomeSwiperSlider slides={slides} />


      <TestoImmagine dati={datiBlocco2} />
      <CallToAction dati={datiBlocco4}  />
      <TestoImmagine dati={datiBlocco5} />
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