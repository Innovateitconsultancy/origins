import Link from 'next/link'

export default function AboutSection() {
    return (
        <>
            <section className="about-section section-padding fix">
                <div className="container">
                    <div className="about-wrapper">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="about-image-items">
                                    <div className="about-image-1">
                                        <div className="about-image-2 wow fadeInUp" data-wow-delay=".3s">
                                            <img src="/assets/img/home-img4.jpg" alt="about-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 offset-lg-1 mt-4 mt-lg-0">
                                <div className="about-content">
                                    <div className="section-title">
                                        <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                            About <span>Origins</span>
                                        </h2>
                                    </div>
                                    <p className="text-white mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                        Our therapies are developed by a team of doctors and scientists and are independently laboratory tested for safety. By delivering essential nutrients, vitamins, electrolytes, minerals and antioxidants our therapies can help to maintain your nutritional health.
                                    </p>
                                    <p className="text-white mt-3 wow fadeInUp" data-wow-delay=".7s">
                                        IV drip therapy and vitamin booster shots are an alternative way to supplement your body’s nutritional health. IV nutrition offers 100% absorption into the bloodstream.
                                    </p>
                                    <div className="about-author">
                                        <div className="about-button wow fadeInUp" data-wow-delay=".9s">
                                            <Link href="/about" className="theme-btn">
                                                Know More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
