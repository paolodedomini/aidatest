import style from './testoImmagine.module.scss';
import { BASE_URL_IMMAGINI } from '../../lib/costanti';
import { ReadMore } from '../ui/ui';
import Image from 'next/image'

function TestoImmagine({ dati }) {
  
    const immagine = dati.resources[0].images[0].fullPath
    const testi = dati.payload.text
    const posizione = dati.payload.imagePos

    return (
        <section className={`blocco_1 ${posizione == 'sx' ? 'reverse' : ''}`} >
            <div className="col__2">
                <div className={style.wrapperText} >
                    <div dangerouslySetInnerHTML={{ __html: testi  }} />
                    <ReadMore />
                </div>
            </div>
            <div className="col__2">
                <div className={style.wrapperImage}>
                    <Image
                        src={`${BASE_URL_IMMAGINI}${immagine}`}
                        width={504}
                        height={504}
                        blurDataURL='/images/back_main_menu.png'
                        placeholder="blur"
                        layout='intrinsic'
                    />
                </div>
            </div>
        </section>
    )
}

export default TestoImmagine