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
                                            <p>Maintain your nutritional balance with Miniboost, a compact yet powerful...</p>
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
                                            <p>Hydromax IV therapy is carefully formulated using scientific principles...</p>
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
                                            <p>Ultraviv is expertly developed by our medical team with a unique combination...</p>
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
                                            <p>Created to promote overall wellness, the Megaboost infusion delivers a powerful...</p>
                                            <Link href="/iv-drip-therapy/megaboost" className="theme-btn-2 mt-3">
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
                                            <p>Packed with nourishing ingredients, Vitaglow is designed to support...</p>
                                            <Link href="/iv-drip-therapy/vitaglow" className="theme-btn-2 mt-3">
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
                                            <h5>Recover your wellness</h5>
                                            <p>Bringing together the powerful benefits of Ultraviv, Megaboost...</p>
                                            <Link href="/iv-drip-therapy/royal-flush" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/nad.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>NAD+</h4>
                                            <h5>Biohack your Biology</h5>
                                            <p>NAD+ is a vital coenzyme found in all cells of the body, playing a key role in energy...</p>
                                            <Link href="/iv-drip-therapy/nad" className="theme-btn-2 mt-3">
                                                Find More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-card-items">
                                        <div className="service-image">
                                            <img src="/assets/img/therapy/ultraviv-pro.jpg" alt="therapy-img" />
                                        </div>
                                        <div className="service-content">
                                            <h4>Ultraviv PRO</h4>
                                            <h5>Ultraviv like a PRO</h5>
                                            <p>Ultraviv PRO is a thoughtfully crafted blend of vitamins, minerals, and essential nutrients...</p>
                                            <Link href="/iv-drip-therapy/ultraviv-pro" className="theme-btn-2 mt-3">
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
