'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: false,
    autoplay: false,
    /* autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    }, */
    navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
    },

    breakpoints: {
        1199: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
}

export default function TherapySection() {
    return (
        <>
            <section className="service-section fix section-padding bg-cover">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                IV Drip Therapy
                            </h2>
                        </div>
                        <div className="array-button">
                            <button className="array-prev"><i className="fal fa-arrow-right" /></button>
                            <button className="array-next"><i className="fal fa-arrow-left" /></button>
                        </div>
                    </div>
                    <div className="service-wrapper">
                        <div className="swiper service-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/miniboost.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Miniboost</h4>
                                            <h5>Small & Mighty</h5>
                                            <p>Most popular wellness infusion, formulated to deliver the nutrients you require...</p>
                                            <Link href="/iv-drip-therapy/miniboost" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/hydromax.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Hydromax</h4>
                                            <h5>Your Peak Perfomance</h5>
                                            <p>Our Hydromax IV therapy is scientifically designed for hydration and to support...</p>
                                            <Link href="/iv-drip-therapy/hydromax" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/ultraviv.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Ultraviv</h4>
                                            <h5>Get Well & Bounce Back</h5>
                                            <p>Formulated by our medical professionals, the Ultraviv IV drip aims to help you...</p>
                                            <Link href="/iv-drip-therapy/ultraviv" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/megaboost.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Megaboost</h4>
                                            <h5>The signature IV</h5>
                                            <p>Designed with wellness in mind, the nutrient-rich, formulated to deliver the nutrients you require.</p>
                                            <Link href="/" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/vitaglow.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Vitaglow</h4>
                                            <h5>Go for the glow</h5>
                                            <p>Rich in antioxidants, it can help support optimum wellness and aiding maintenance of skin, hair and nails.</p>
                                            <Link href="/" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/royal-flush.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Royal Flush</h4>
                                            <h5>Restore & Recuperate</h5>
                                            <p>Packed with vitamins, minerals and more, the Royal Flush IV drip works to support normal recovery and wellness.</p>
                                            <Link href="/" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
