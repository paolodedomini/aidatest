import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/lazy";
import style from './sliderHome.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Lazy } from "swiper";
import { BASE_URL_IMMAGINI } from '../../lib/costanti'


const HomeSwiperSlider = ({ slides }) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    };

    return (
        <section className='blocco_0'>
            <Swiper
                className={`${style.homeSlider}`}
                modules={[Pagination, Lazy]}
                slidesPerView={1}
                lazy={true}
                pagination={pagination}
                onSlideChange={() => console.log('slide change')}
            >
                {slides.map((item) => {
                    return (
                        <div key={item._id}>
                            <SwiperSlide>
                                <div className={style.innerSlide}>
                                    <div className={style.wrapperText}>
                                        <h2>{item.text?.title}</h2>
                                        <h3>{item.text?.subtitle}</h3>
                                    </div>
                                    <div className={style.background}>
                                        <Image
                                            src={`${BASE_URL_IMMAGINI}${item.imgs.images[0].fullPath}`}
                                            width={2048}
                                            height={1080}
                                            blurDataURL='/images/back_main_menu.png'
                                            placeholder="blur"
                                            layout='intrinsic'
                                        />
                                    </div>
                                    {item.imgs.images[1] &&
                                        <div className={style.imageOver}>
                                            <Image
                                                className="swiper-lazy"
                                                src={`${BASE_URL_IMMAGINI}${item.imgs.images[1].fullPath}`}
                                                width={1033}
                                                height={900}
                                                blurDataURL='/images/back_main_menu.png'
                                                placeholder="blur"
                                                layout='intrinsic'
                                            />
                                        </div>}
                                </div>
                                
                                <div className="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
                            </SwiperSlide>
                        </div>

                    )

                })}

            </Swiper>
        </section>
    );
};

export default HomeSwiperSlider