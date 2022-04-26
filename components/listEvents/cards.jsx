import Link from 'next/link'
import { GrLinkNext } from "react-icons/gr"
import { BASE_URL_IMMAGINI } from '../../lib/costanti'
import Image from 'next/image'

function Cards({ listaDatiFiltrati, style }) {
  const sliced = listaDatiFiltrati.slice(0, 15)
  return (
    <ul className={style.cardWrapper}>
      {sliced.map((item) => {
        const dataPubblicazione = new Date(item.pubblicationDate).toLocaleString('en', { day: 'numeric', month: 'long', year: 'numeric' })
        return (
          <Link key={item._id} href={`magazine/${item.slug}`}>
            <li className={style.card}>
              <div className={style.cardImage}>
                {item.thumbnail ? <Image
                  src={`${BASE_URL_IMMAGINI}${item.thumbnail?.images[0].fullPath}`}
                  width={450}
                  height={250}
                  blurDataURL='/images/back_main_menu.png'
                  placeholder="blur"
                  layout='intrinsic'
                /> :

                  <Image
                    src="/images/placeholder.jpg"
                    width={450}
                    height={250}
                    quality={100}
                    blurDataURL='/images/back_main_menu.png'
                    placeholder="blur"
                    layout='intrinsic'
                  />
                }
              </div>
              <div className={style.textCard}>
                <div className={style.data}>
                  {dataPubblicazione}
                </div>
                <div className={style.title}>{item.title}</div>
                <div className={style.abstract}>  {
                item.abstract.length > 150 ?
                  `${item.abstract.substring(0, 150)}...` : item.abstract
                }</div>
              </div>
            </li>
          </Link>
        )
      })}

    </ul>
  )
}

export default Cards