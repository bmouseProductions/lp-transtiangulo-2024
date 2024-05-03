import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import vegetal1 from '../../../../assets/images/oleos-vegetais/borra-de-soja.webp'
import vegetal2 from '../../../../assets/images/oleos-vegetais/glicerina.webp'
import vegetal3 from '../../../../assets/images/oleos-vegetais/oleo-de-soja.webp'

import animal1 from '../../../../assets/images/oleos-animais/sebo-bovino.webp'
import animal2 from '../../../../assets/images/oleos-animais/graxa-branca.webp'
import animal3 from '../../../../assets/images/oleos-animais/oleo-de-peixe.webp'
import animal4 from '../../../../assets/images/oleos-animais/oleo-de-víseras.webp'

export default function SectionThree() {
    return (
        <section className="bg-green-arrow">
            <div className='container mx-auto py-14'>

            <h1 className='text-4xl lg:text-5xl lg:6xl uppercase text-center text-white mb-5'>
                O que nós <br className='md:hidden ' /> transportamos:
            </h1>
                
                <Swiper
                    pagination={{
                    type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    spaceBetween={30}
                    centeredSlides={true}
                    className="mySwiper relative max-w-[90%] 2xl:max-w-[80%] min-h-[750px] md:min-h-[430px] text-white"
                >
                    <SwiperSlide className='pt-5 pb-14 flex flex-col-reverse md:flex-row gap-5 lg:gap-10 justify-around'>
                        <div className='w-full h-fit p-10 max-h-[] flex flex-col justify-center gap-3 bg-[#49a760] rounded-2xl '>
                            <img 
                                src="https://transtriangulo.com.br/campanha2023/img/entrega-rapida.png" 
                                alt="" 
                                className='w-10 self-center'
                            />

                            <h2 className='text-2xl text-center font-semibold'>
                                Óleos E Gorduras Vegetais
                            </h2>

                            <hr />

                            <ul className='lg:pl-5 flex flex-col gap-3'>
                                <li className='flex items-center gap-3'>
                                    <img
                                        src="https://transtriangulo.com.br/campanha2023/img/icons/soy.svg"
                                        alt=""
                                        className='w-12 p-2 bg-white rounded-full'
                                    />
                                    Óleo de soja degomado
                                </li>
                                <li className='flex items-center gap-3'>
                                    <img
                                        src="https://transtriangulo.com.br/campanha2023/img/icons/soy.svg"
                                        alt=""
                                        className='w-12 p-2 bg-white rounded-full'
                                    />
                                    Borra de óleo de soja
                                </li>
                                <li className='flex items-center gap-3'>
                                    <img
                                        src="https://transtriangulo.com.br/campanha2023/img/icons/oil.svg"
                                        alt=""
                                        className='w-12 p-2 bg-white rounded-full'
                                    />
                                    Glicerina
                                </li>
                                <li className='flex items-center gap-3'>
                                    <img
                                        src="https://transtriangulo.com.br/campanha2023/img/icons/gorduravegetal.svg"
                                        alt=""
                                        className='w-12 p-2 bg-white rounded-full'
                                    />
                                    Entre outros
                                </li>
                            </ul>
                            
                        </div>

                        <div className='w-full md:max-w-[300px] lg:max-w-[600px] '>
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={20}
                                autoplay={{
                                    delay: 1500,
                                    disableOnInteraction: true,
                                }}
                                centeredSlides={true}   
                                className="mySwiper2 "
                            >
                                <SwiperSlide className='flex justify-center'>
                                    <img src={vegetal1} className='max-w-[300px] rounded-2xl ' alt="" />
                                </SwiperSlide>

                                <SwiperSlide className='flex justify-center'>
                                    <img src={vegetal2} className='max-w-[300px] rounded-2xl ' alt="" />
                                </SwiperSlide>

                                <SwiperSlide className='flex justify-center'>
                                    <img src={vegetal3} className='max-w-[300px] rounded-2xl ' alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='pt-5 pb-14 flex flex-col-reverse md:flex-row gap-5 lg:gap-10 justify-around'>
                        <div className='w-full h-fit p-10 max-h-[] flex flex-col justify-center gap-3 bg-[#49a760] rounded-2xl '>
                            <img 
                                src="https://transtriangulo.com.br/campanha2023/img/entrega-rapida.png" 
                                alt="" 
                                className='w-10 self-center'
                            />

                            <h2 className='text-2xl text-center font-semibold'>
                                Óleos E Gorduras Animais
                            </h2>

                            <hr />

                            <ul className='lg:pl-5 flex flex-col gap-3'>
                                <li className='flex items-center gap-3'>
                                    <img
                                        src="https://transtriangulo.com.br/campanha2023/img/icons/fat.svg"
                                        alt=""
                                        className='w-12 p-2 bg-white rounded-full'
                                    />
                                    Sebo Bovino
                                </li>
                                <li className='flex items-center gap-3'>
                                    <img
                                        src="https://transtriangulo.com.br/campanha2023/img/icons/pig.svg"
                                        alt=""
                                        className='w-12 p-2 bg-white rounded-full'
                                    />
                                    Graxa Branca Suína
                                </li>
                                <li className='flex items-center gap-3'>
                                    <img
                                        src="https://transtriangulo.com.br/campanha2023/img/icons/fish.svg"
                                        alt=""
                                        className='w-12 p-2 bg-white rounded-full'
                                    />
                                    Óleo de Peixe
                                </li>
                                <li className='flex items-center gap-3'>
                                    <img
                                        src="https://transtriangulo.com.br/campanha2023/img/icons/chicken.svg"
                                        alt=""
                                        className='w-12 p-2 bg-white rounded-full'
                                    />
                                    Óleo de Aves (óleo de vísceras)
                                </li>
                            </ul>
                            
                        </div>

                        <div className='w-full max-w-[600px] '>
                            <Swiper
                                modules={[Autoplay]}
                                autoplay={{
                                    delay: 1500,
                                    disableOnInteraction: true,
                                }}
                                centeredSlides={true} 
                                spaceBetween={20}
                                className="mySwiper2 "
                            >
                                <SwiperSlide className='flex justify-center'>
                                    <img src={animal1} className='max-w-[300px] rounded-2xl ' alt="" />
                                </SwiperSlide>

                                <SwiperSlide className='flex justify-center'>
                                    <img src={animal2} className='max-w-[300px] rounded-2xl ' alt="" />
                                </SwiperSlide>

                                <SwiperSlide className='flex justify-center'>
                                    <img src={animal3} className='max-w-[300px] rounded-2xl ' alt="" />
                                </SwiperSlide>

                                <SwiperSlide className='flex justify-center'>
                                    <img src={animal4} className='max-w-[300px] rounded-2xl ' alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    )
}