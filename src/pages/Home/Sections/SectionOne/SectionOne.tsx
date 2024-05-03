import logo from '../../../../assets/images/logo.webp'
import Button from '../../../../components/Button/Button'

export default function SectionOne(){
    return (
        <section className="mt-[-100px] relative z-40 flex flex-col pt-20 text-white bg-gradient-to-b from-transparent  to-[#074d2c] to-5% ">
            <div className="bg-green-arrow flex overflow-hidden relative flex-col items-center px-16 pt-2.5 pb-20 w-full min-h-[714px] max-md:px-5 max-md:max-w-full">
                
                <div className="flex relative flex-col items-center mb-6 w-full max-w-[1047px] max-md:max-w-full">
                    <div className="hidden lg:flex gap-2.5 justify-center p-2.5 text-xl leading-7 text-center rounded-[100px]">
                        <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fbb05ef1c6c1f248ba119062968ff0da97628eeaf0c21c39f25e0118993aa32?apiKey=f3f6ab0d16cf4f10881b61c4cf8dd438&"
                        className="shrink-0 my-auto w-6 aspect-square"
                        />
                        <div className="italic">SCROLL DOWN</div>
                    </div>

                    <img src={logo} className="lg:hidden w-[70%] max-w-[300px] mt-10" alt="" />
                    
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f7573f298a13a09c8b49f9680b4c55ff12959f0265d66d1f31c34b6ac30cb54?apiKey=f3f6ab0d16cf4f10881b61c4cf8dd438&"
                        className="mt-20 max-w-full aspect-[7.14] w-[960px] max-md:mt-10"
                    />

                    <div className="justify-center px-10 py-5 mt-11 max-w-full text-lg italic leading-7 text-center bg-orange-500 rounded-3xl w-[952px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <span className="text-white">
                        A Transtriângulo conta com um sistema de qualidade que mapeia os
                        processos, que permite a pontualidade nas entregas, segurança e
                        satisfação dos clientes.
                        </span>{" "}
                        <span className="font-bold text-white">
                        Confira alguns de nossos dados
                        </span>
                        <br />
                        <span className="font-bold text-white">do ano de 2023:</span>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5 justify-center md:justify-between self-stretch mt-20 text-6xl leading-[93px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full max-lg:text-4xl">
                        <div data-aos="fade-right" data-aos-duration='1500' className="text-center md:text-start italic max-md:text-6xl">
                            
                            <span className="font-bold text-orange-500">+</span>
                            <span className="">3.452.284</span>
                            <p className='text-sm md:!text-lg text-center'>
                                Milhões de KM Rodados
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration='1500' className="text-center md:text-start italic max-md:text-6xl">
                            <span className="font-bold text-orange-500">+</span>
                            <span className="">1.319.031</span>
                            <p className='text-sm md:text-lg text-center'>
                                Totais de litros
                            </p>
                        </div>
                        <div data-aos="fade-left" data-aos-duration='1500' className="text-center md:text-start italic max-md:text-6xl">
                            <span className="font-bold text-orange-500">+</span>
                            <span className="">52.190,60</span>
                            <p className='text-sm md:text-lg text-center'>
                                Litros de Combustíveis Economizados
                            </p>
                        </div>
                    </div>
                    
                    <Button estilo='principal'  />
                </div>
            </div>
        </section>
    )
}