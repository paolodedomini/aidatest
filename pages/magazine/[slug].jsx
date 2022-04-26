import { menuData, magazineData, singoloPost } from '../../lib/queries'
import { useRouter } from 'next/router'
import Layout from '../../layout/layout'
import { BASE_URL_IMMAGINI } from '../../lib/costanti'
import Image from 'next/image'
import style from './magazine.module.scss'

const MagazinePage = ({menu, singlePost }) => {
  const router = useRouter()
  const { slug } = router.query
  const dataPubblicazione = new Date(singlePost.startDate).toLocaleString('en', { day: 'numeric', month: 'long', year: 'numeric' })
  console.log('articolo', singlePost);
  return (

    <Layout menu={menu} router={router}>
      <section className="magazine-page">
        <div className="col-1">
          <div className={style.articoloImage}>
            {singlePost.thumbnail ? <Image
              src={`${BASE_URL_IMMAGINI}${singlePost.thumbnail?.images[0].fullPath}`}
              width={450}
              height={250}
              blurDataURL='/images/back_main_menu.png'
              placeholder="blur"
              layout='intrinsic'
            /> : <Image
              src="/images/placeholder.jpg"
              width={450}
              height={250}
              quality={100}
              blurDataURL='/images/back_main_menu.png'
              placeholder="blur"
              layout='intrinsic'
            />}
          </div>
          <div className={style.specs}>
            <div className={style.category}>
              <sub>Category</sub>
             {singlePost.category.name}
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className={style.titoli}>
            <h2>
              <sub className={style.data}>{dataPubblicazione}</sub>
              {singlePost.name}
            </h2>
          </div>
          <div className={style.corpoTesto}>
            <p>
              {singlePost.abstract}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}


export async function getServerSideProps(context) {
const {slug} = context.query
  const [menuRes, postRes] = await Promise.all([
    fetch(menuData('it')),
    fetch(singoloPost('en', 'workshop-7th-aida-international-meeting-day-4-uveitis-and-scleritis'))

  ]);
  const [menu,  singlePost] = await Promise.all([
    menuRes.json(),
    postRes.json()
  ]);
const x = context.query
  return { props: { menu, singlePost } };


}
export default MagazinePage
