import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: 'Methylene Blue || Origins',
    description: 'Methylene Blue Origins IV Drip Therapy & IV Vitamin Infusions',
};

export default function MethyleneBlue() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Methylene Blue">
                <section className="Project-details-section fix section-padding inner">
                    <div className="container">
                        <div className="project-details-wrapper">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-details-items">
                                        <div className="details-image">
                                            <img src="/assets/img/therapy/methylene-blue-img1.jpg" alt="img" />
                                        </div>
                                        <div className="row g-4 justify-content-between">
                                            <div className="col-lg-7">
                                                <div className="details-content pt-5">
                                                    <h3>Biohack your baseline</h3>
                                                    <p>In today’s fast-paced lifestyle where concentration, quick recovery, and sustained energy levels throughout the day are essential, wellness solutions are advancing to meet new demands. High achievers, regular travelers, and those seeking mental clarity are increasingly turning to methylene blue for its potential to support mitochondrial health, balance oxidative processes, and enhance cognitive performance.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="project-catagory">
                                                    <img src="/assets/img/therapy/methylene-blue.jpg" alt="img" />
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
                                                <Link href="/nutrients/methylene-blue">
                                                    <div className="service-box-items box-shadow">
                                                        <div className="icon">
                                                            <img src="/assets/img/nutrients/methylene-blue.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Methylene Blue</h4>
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
                                        </div>
                                        <div className="row g-lg-5 g-4 pt-5 mt-lg-5">
                                            <div className="col-lg-5">
                                                <div className="thumb">
                                                    <img src="/assets/img/therapy/methylene-blue-img2.jpg" alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="details-content">
                                                    <h3>How does it work?</h3>
                                                    <p className="mb-3">Methylene Blue’s key benefits support cellular energy production, brain performance, oxidative balance, and overall wellness at a cellular level.</p>
                                                    <p className="mb-3"><b>Methylene Blue key nutrients contributes to:</b></p>
                                                    <ul className="list mb-3">
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Helps support healthy cellular energy generation
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Contributes to proper mitochondrial performance
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Assists in lowering oxidative stress through antioxidant support
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Supports efficient oxygen use within cells
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Helps maintain balanced redox activity in cells
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Promotes normal brain and nervous system function
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Enhances natural electron transport in cellular processes
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Supports enzymes involved in energy-producing metabolism
                                                        </li>
                                                    </ul>
                                                    <p className="mb-3"><b>What is it for?</b></p>
                                                    <ul className="list">
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Helps maintain healthy mitochondrial performance
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Provides antioxidant support against oxidative stress
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Supports mental clarity and brain function
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Aids efficient oxygen utilization within cells
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
                                            <div className="col-lg-3 pt-lg-5">
                                                <Link href="/vitamin-shots/nad-im">
                                                    <div className="service-box-items style box-shadow">
                                                        <div className="icon">
                                                            <img src="/assets/img/vitamin-shots/nad-im.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <p>Maintain your wellness with our new NAD+ IM vitamin shot, designed to support cellular energy, metabolism, and vitality with fast absorption. It helps boost focus and everyday performance.</p>
                                                            <Link href="/vitamin-shots/nad-im" className="theme-btn-2">Find More</Link>
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
