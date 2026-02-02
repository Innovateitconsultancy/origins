
import Link from 'next/link'

export default function Team2() {
    return (
        <>
            <section className="team-section-2 section-padding bg-cover">
                <div className="container">
                    <div className="section-title-area justify-content-center">
                        <div className="section-title text-center">
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">
                                Discover a therapy<br /> as unique as you are
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="team-card-items">
                                <div className="team-image">
                                    <img src="/assets/img/home-img1.jpg" alt="therapy-img" />
                                </div>
                                <div className="team-content">
                                    <h3>IV drip therapy</h3>
                                    <p>Personalized and precision nutrition delivered via IV Drip Therapy.</p>
                                    <Link href="/" className="theme-btn-3 mt-3 text-end d-block">Find out more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="team-card-items">
                                <div className="team-image">
                                    <img src="/assets/img/home-img2.jpg" alt="therapy-img" />
                                </div>
                                <div className="team-content">
                                    <h3>Vitamin shots</h3>
                                    <p>A quick method of receiving essential nutrients into your body.</p>
                                    <Link href="/" className="theme-btn-3 mt-3 text-end d-block">Find out more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="team-card-items">
                                <div className="team-image">
                                    <img src="/assets/img/home-img3.jpg" alt="therapy-img" />
                                </div>
                                <div className="team-content">
                                    <h3>Mobile IV therapy</h3>
                                    <p>Tailor your Origins experience to suit your needs.</p>
                                    <Link href="/" className="theme-btn-3 mt-3 text-end d-block">Find out more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
