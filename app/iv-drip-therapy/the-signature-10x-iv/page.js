import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: 'The Signature 10X IV || Origins',
    description: 'The Signature 10X IV Origins IV Drip Therapy & IV Vitamin Infusions',
};

export default function TheSignature() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="The Signature 10X IV">
                <section className="Project-details-section fix section-padding inner">
                    <div className="container">
                        <div className="project-details-wrapper">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-details-items">
                                        <div className="details-image">
                                            <img src="/assets/img/therapy/the-signature-img1.jpg" alt="img" />
                                        </div>
                                        <div className="row g-4 justify-content-between">
                                            <div className="col-lg-7">
                                                <div className="details-content pt-5">
                                                    <h3>10X blend to optimize your wellness</h3>
                                                    <p>The Signature 10X IV is a targeted wellness blend designed to support hydration, boost energy, reduce fatigue, and strengthen immunity. With a powerful mix of essential vitamins and electrolytes, it helps restore balance and keep your body performing at its best every day. This infusion promotes faster recovery and sustained vitality. It’s ideal for busy lifestyles and overall wellness support. The nutrients are delivered directly for quick, effective results.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="project-catagory">
                                                    <img src="/assets/img/therapy/the-signature.jpg" alt="img" />
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
                                                <Link href="/nutrients/vitamin-b1">
                                                    <div className="service-box-items box-shadow">
                                                        <div className="icon">
                                                            <img src="/assets/img/nutrients/vitamin-b1.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Vitamin B1</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4">
                                                <Link href="/nutrients/vitamin-b2">
                                                    <div className="service-box-items box-shadow">
                                                        <div className="icon">
                                                            <img src="/assets/img/nutrients/vitamin-b2.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Vitamin B2</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4">
                                                <Link href="/nutrients/vitamin-b3">
                                                    <div className="service-box-items box-shadow">
                                                        <div className="icon">
                                                            <img src="/assets/img/nutrients/vitamin-b3.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Vitamin B3</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4">
                                                <Link href="/nutrients/vitamin-b5">
                                                    <div className="service-box-items box-shadow">
                                                        <div className="icon">
                                                            <img src="/assets/img/nutrients/vitamin-b5.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Vitamin B5</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-lg-4">
                                                <Link href="/nutrients/vitamin-b6">
                                                    <div className="service-box-items box-shadow">
                                                        <div className="icon">
                                                            <img src="/assets/img/nutrients/vitamin-b6.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Vitamin B6</h4>
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
                                        </div>
                                        <div className="row g-lg-5 g-4 pt-5 mt-lg-5">
                                            <div className="col-lg-5">
                                                <div className="thumb">
                                                    <img src="/assets/img/therapy/the-signature-img2.jpg" alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="details-content">
                                                    <h3>How does it work?</h3>
                                                    <p className="mb-3">Boost your energy, refresh your body, and strengthen your immune system with this expertly crafted blend of vitamins, electrolytes, and essential nutrients. The 10X Signature IV is formulated to enhance vitality and overall wellness through a powerful mix of B vitamins, vitamin C, calcium, magnesium, and more. This targeted infusion works to increase energy levels, ease muscle fatigue, and support immune health from within, helping you feel recharged and perform at your best each day.</p>
                                                    <p className="mb-3"><b>What is it for?</b></p>
                                                    <ul className="list">
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Supports proper hydration levels
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Boosts natural energy
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Helps ease tiredness and exhaustion
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Strengthens immune system function
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
