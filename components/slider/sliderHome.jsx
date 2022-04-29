import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import style from './sliderHome.module.scss'
import { BASE_URL_IMMAGINI } from '../../lib/costanti'
import { SliderButtons } from './sliderButtons'
import { useEffect, useState, useCallback } from 'react'
import {SVGLazy} from '../../lib/animations'

function SliderHome({ slides }) {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [slideSelected, setSlideSelected] = useState(false)
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [
    emblaApi
  ]);
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
 
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex, slideSelected]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi, setScrollSnaps, onSelect]);


  return (
    <div className={`${style.wrapperSlider}`}>
      <div className={style.embla} ref={emblaRef}>
        <div className={style.embla__container} >
          {slides.map((item) => {
            return (
              <div key={item.imgs._id} className={style.embla__slide} >
                <div className={style.wrapperText}>
                  <h2>{item.text?.title}</h2>
                  <h3>{item.text?.subtitle}</h3>
                </div>
                <div className={style.background}>
                  <Image
                    src={`${BASE_URL_IMMAGINI}${item.imgs.images[0].fullPath}`}
                    width={2048}
                    height={1080}
                    placeholder="blur"
                    layout='intrinsic'
                    alt="img"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(SVGLazy(2048, 1080))}`}
                    priority
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
                      layout='intrinsic'
                      priority
                      alt="img"
                    />
                  </div>}
              </div>
            )
          })}
        </div>
      </div>
      <div className={style.dots}>
        {slides.map((_, index) => (
          <SliderButtons
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div >
  )
}

export default SliderHome