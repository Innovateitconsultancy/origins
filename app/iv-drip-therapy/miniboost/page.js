import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: 'Miniboost || Origins',
    description: 'Miniboost Origins IV Drip Therapy & IV Vitamin Infusions',
};

export default function Miniboost() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Miniboost">
                <section className="Project-details-section fix section-padding inner">
                    <div className="container">
                        <div className="project-details-wrapper">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-details-items">
                                        <div className="details-image">
                                            <img src="/assets/img/therapy/miniboost-img1.jpg" alt="img" />
                                        </div>
                                        <div className="row g-4 justify-content-between">
                                            <div className="col-lg-7">
                                                <div className="details-content pt-5">
                                                    <h3>Small & Mighty</h3>
                                                    <p>Maintain your nutritional balance with Miniboost, a compact yet powerful option inspired by the Megaboost. Though smaller in size, Miniboost delivers an effective combination of B vitamins, vitamin C, and antioxidants, making it a strong choice for everyday wellness support. It helps boost energy levels, supports immune function, and promotes overall vitality. Ideal for regular use, Miniboost fits seamlessly into a busy, health-focused lifestyle.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="project-catagory">
                                                    <img src="/assets/img/therapy/miniboost.jpg" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-lg-5 g-4 pt-5">
                                            <div className="col-lg-12">
                                                <div className="section-title mb-0">
                                                    <h1>Key Nutrients</h1>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <Link href="/nutrients/vitamin-c">
                                                    <div className="service-box-items box-shadow">
                                                        <div className="icon">
                                                            <img src="/assets/img/nutrients/vitamin-c.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Vitamin C</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4">
                                                <Link href="/nutrients/vitamin-b12">
                                                    <div className="service-box-items box-shadow">
                                                        <div className="icon">
                                                            <img src="/assets/img/nutrients/vitamin-b12.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Vitamin B12</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4">
                                                <Link href="/nutrients/sodium-chloride-solution">
                                                    <div className="service-box-items box-shadow">
                                                        <div className="icon">
                                                            <img src="/assets/img/nutrients/sodium-chloride-solution.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Sodium Chloride Solution</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4">
                                                <Link href="/nutrients/n-acetylcysteine">
                                                    <div className="service-box-items box-shadow">
                                                        <div className="icon">
                                                            <img src="/assets/img/nutrients/n-acetylcysteine.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>N-Acetylcysteine</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="row g-lg-5 g-4 pt-5">
                                            <div className="col-lg-5">
                                                <div className="thumb">
                                                    <img src="/assets/img/therapy/miniboost-img2.jpg" alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="details-content">
                                                    <h3>How does it work?</h3>
                                                    <p className="mb-2">Miniboost’s key nutrients help support energy production, reduce fatigue, and maintain the healthy functioning of the nervous system, immune system, bones, and teeth.</p>
                                                    <p className="mb-2">Miniboost key nutrients contribute to:</p>
                                                    <ul className="list">
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Supports normal energy-producing metabolism
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Helps reduce tiredness and fatigue
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Contributes to the healthy functioning of the nervous system
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Supports normal immune system function
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Helps maintain healthy bones and teeth
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-lg-5 g-4 pt-5 mt-lg-5">
                                            <div className="col-lg-5 order-lg-2 offset-lg-1">
                                                <div className="section-title mb-0">
                                                    <h1>Works Well With</h1>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <Link href="/vitamin-shots/b-family">
                                                    <div className="service-box-items style box-shadow">
                                                        <div className="icon">
                                                            <img src="/assets/img/vitamin-shots/b-family.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <p>From helping to reduce feelings of tiredness and fatigue to supporting the normal functioning of the immune system, B vitamins play a vital role in maintaining overall health and well-being.</p>
                                                            <Link href="/vitamin-shots/b-family" className="theme-btn-2">Find More</Link>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-3 pt-lg-5">
                                                <Link href="/vitamin-shots/coq10-family">
                                                    <div className="service-box-items style box-shadow">
                                                        <div className="icon">
                                                            <img src="/assets/img/vitamin-shots/coq10-family.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <p>Support your physical well-being with coenzyme Q10 (CoQ10), a naturally occurring compound present in almost every cell of the body that plays a key role in cellular energy and overall health.</p>
                                                            <Link href="/vitamin-shots/coq10-family" className="theme-btn-2">Find More</Link>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
