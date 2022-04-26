import style from './callToAction.module.scss'
import { BASE_URL_IMMAGINI } from '../../lib/costanti'
import Image from 'next/image'

function CallToAction({ dati }) {
  const subtitle = dati.payload.subtitle
  const testi = dati.payload.text
  const link = { link: dati.payload.link, text: dati.payload.linkText }
  const immagine = dati.resources[0].images[0].fullPath
  return (
    <section className="blocco_2">
      <div className={style.wrappertext}>
        <h3 className={style.title}>{subtitle}</h3>
        <div className={style.text} dangerouslySetInnerHTML={{ __html: testi }} />
      </div>
      <div className={style.calltoaction}>
        <div className={style.ctaBtn}>
          <a href={link.link}>{link.text}</a>
        </div>
      </div>
      <div className={style.background}>
          <Image
            src={`${BASE_URL_IMMAGINI}${immagine}`}
            width={450}
            height={330}
            blurDataURL='/images/back_main_menu.png'
            placeholder="blur"
            layout='intrinsic'
          />
        </div>
    </section>
  )
}

export default CallToAction