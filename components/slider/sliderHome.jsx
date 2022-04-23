import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import style from './sliderHome.module.scss'
import { BASE_URL_IMMAGINI } from '../../lib/costanti'

function SliderHome({ slides }) {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className={style.wrapperSlider}>
      <div className={style.embla} ref={emblaRef}>
        <div className={style.embla__container} >
          {slides.map((item) => {
            return (
              <div key={item.imgs._id} className={style.embla__slide} >

                <div className={style.wrapperText}>
                  <h1>{item.text?.title}</h1>
                  <h1>{item.text?.subtitle}</h1>
                </div>
                <div className={style.background}>
                <Image
                  
                  src={`${BASE_URL_IMMAGINI}${item.imgs.images[0].fullPath}`}
                  width={2033}
                  height={1080}
                  blurDataURL='/images/back_main_menu.png'
                  placeholder="blur"
                />
                </div>
                {item.imgs.images[1] &&
                  <div className={style.imageOver}>
                    <Image
                      src={`${BASE_URL_IMMAGINI}${item.imgs.images[1].fullPath}`}
                      width={1033}
                      height={900}
                      blurDataURL='/images/back_main_menu.png'
                      placeholder="blur"
                    />
                    </div>}
              </div>
            )
          })}
        </div>
      </div>
    </div >
  )
}

export default SliderHome