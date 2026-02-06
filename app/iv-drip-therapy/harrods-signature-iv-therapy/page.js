import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: 'Harrods Signature IV Therapy || Origins',
    description: 'Harrods Signature IV Therapy Origins IV Drip Therapy & IV Vitamin Infusions',
};

export default function HarrodsSignature() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Harrods Signature IV Therapy">
                <section className="Project-details-section fix section-padding inner">
                    <div className="container">
                        <div className="project-details-wrapper">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-details-items">
                                        <div className="details-image">
                                            <img src="/assets/img/therapy/harrods-signature-img1.jpg" alt="img" />
                                        </div>
                                        <div className="row g-4 justify-content-between">
                                            <div className="col-lg-7">
                                                <div className="details-content pt-5">
                                                    <h3>The ultimate IV wellness therapy</h3>
                                                    <p>Harrods Signature IV Therapy is Origins’ most premium wellness treatment, offered exclusively at Harrods in London. Created by a team of experienced doctors and scientists, this advanced formulation provides comprehensive vitamin and hydration support. It features a potent blend of nutrients, including glutathione and selenium to aid the body’s natural detox processes, along with essential vitamins and minerals such as magnesium to support overall balance and vitality.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="project-catagory">
                                                    <img src="/assets/img/therapy/harrods-signature.jpg" alt="img" />
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
                                                <Link href="/nutrients/alpha-lipoic-acid">
                                                    <div className="service-box-items box-shadow">
                                                        <div className="icon">
                                                            <img src="/assets/img/nutrients/alpha-lipoic-acid.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Alpha Lipoic Acid</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4">
                                                <Link href="/nutrients/selenium">
                                                    <div className="service-box-items box-shadow">
                                                        <div className="icon">
                                                            <img src="/assets/img/nutrients/selenium.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Selenium</h4>
                                                        </div>
                                                    </div>
                                                </Link>
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
                                                <Link href="/nutrients/magnesium">
                                                    <div className="service-box-items box-shadow">
                                                        <div className="icon">
                                                            <img src="/assets/img/nutrients/magnesium.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Magnesium</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4">
                                                <Link href="/nutrients/glutathione">
                                                    <div className="service-box-items box-shadow">
                                                        <div className="icon">
                                                            <img src="/assets/img/nutrients/glutathione.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Glutathione</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="row g-lg-5 g-4 pt-5">
                                            <div className="col-lg-12">
                                                <div className="section-title mb-0">
                                                    <h2>Also contains the nutrients</h2>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <Link href="/nutrients/vitamin-b1">
                                                    <div className="service-box-items box-shadow small">
                                                        <div className="icon">
                                                            <img src="/assets/img/nutrients/vitamin-b1.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Vitamin B1</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-3">
                                                <Link href="/nutrients/vitamin-b2">
                                                    <div className="service-box-items box-shadow small">
                                                        <div className="icon">
                                                            <img src="/assets/img/nutrients/vitamin-b2.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Vitamin B2</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-3">
                                                <Link href="/nutrients/vitamin-b3">
                                                    <div className="service-box-items box-shadow small">
                                                        <div className="icon">
                                                            <img src="/assets/img/nutrients/vitamin-b3.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Vitamin B3</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-3">
                                                <Link href="/nutrients/vitamin-b5">
                                                    <div className="service-box-items box-shadow small">
                                                        <div className="icon">
                                                            <img src="/assets/img/nutrients/vitamin-b5.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Vitamin B5</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-3">
                                                <Link href="/nutrients/vitamin-b6">
                                                    <div className="service-box-items box-shadow small">
                                                        <div className="icon">
                                                            <img src="/assets/img/nutrients/vitamin-b6.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Vitamin B6</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-3">
                                                <Link href="/nutrients/n-acetylcysteine">
                                                    <div className="service-box-items box-shadow small">
                                                        <div className="icon">
                                                            <img src="/assets/img/nutrients/n-acetylcysteine.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>N-Acetylcysteine</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-3">
                                                <Link href="/nutrients/sodium-chloride-solution">
                                                    <div className="service-box-items box-shadow small">
                                                        <div className="icon">
                                                            <img src="/assets/img/nutrients/sodium-chloride-solution.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Sodium Chloride Solution</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-3">
                                                <Link href="/nutrients/zinc">
                                                    <div className="service-box-items box-shadow small">
                                                        <div className="icon">
                                                            <img src="/assets/img/nutrients/zinc.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Zinc</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-3">
                                                <Link href="/nutrients/coenzyme-q10">
                                                    <div className="service-box-items box-shadow small">
                                                        <div className="icon">
                                                            <img src="/assets/img/nutrients/coenzyme-q10.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Coenzyme Q10</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="row g-lg-5 g-4 pt-5 mt-lg-5">
                                            <div className="col-lg-5">
                                                <div className="thumb">
                                                    <img src="/assets/img/therapy/harrods-signature-img2.jpg" alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="details-content">
                                                    <h3>How does it work?</h3>
                                                    <p className="mb-3">This advanced infusion provides a broad spectrum of nutrients and antioxidants in one powerful treatment, created to support energy production, immune health, skin vitality, cellular function, and overall well-being. It offers a premium IV experience for individuals looking for focused, high-quality support tailored to their lifestyle and wellness objectives.</p>
                                                    <ul className="list">
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Supports deep hydration and comprehensive vitamin replenishment
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Helps boost energy metabolism and reduce fatigue
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Strengthens immune function and cellular health
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Promotes detoxification, skin vitality, and overall wellness
                                                        </li>
                                                    </ul>
                                                </div>
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
