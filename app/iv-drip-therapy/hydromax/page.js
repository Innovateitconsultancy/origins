import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: 'Hydromax || Origins',
    description: 'Hydromax Origins IV Drip Therapy & IV Vitamin Infusions',
};

export default function Hydromax() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Hydromax">
                <section className="Project-details-section fix section-padding inner">
                    <div className="container">
                        <div className="project-details-wrapper">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-details-items">
                                        <div className="details-image">
                                            <img src="/assets/img/therapy/hydromax-img1.jpg" alt="img" />
                                        </div>
                                        <div className="row g-4 justify-content-between">
                                            <div className="col-lg-7">
                                                <div className="details-content pt-5">
                                                    <h3>Hydration the Origins way</h3>
                                                    <p>Hydromax IV therapy is carefully formulated using scientific principles to support proper hydration levels and promote healthy metabolic function in the body. By delivering fluids and essential nutrients directly into the bloodstream, it helps restore balance quickly and effectively. This therapy is ideal for boosting energy, supporting recovery, and maintaining overall wellness. It also assists the body in performing at its best during periods of stress, travel, or physical exertion.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="project-catagory">
                                                    <img src="/assets/img/therapy/hydromax.jpg" alt="img" />
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
                                                    <img src="/assets/img/therapy/hydromax-img2.jpg" alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="details-content">
                                                    <h3>How does it work?</h3>
                                                    <p className="mb-3">Hydromax’s key nutrients help maintain proper hydration, support healthy metabolic function, boost energy levels, and promote overall balance and well-being in the body.</p>
                                                    <p className="mb-3"><b>Hydromax key nutrients contribute to:</b></p>
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
                                                            Aids in maintaining healthy electrolyte balance
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Contributes to proper functioning of the nervous system
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Supports normal protein production in the body
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Helps maintain healthy cognitive and psychological function
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Assists in keeping bones and teeth strong and healthy
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
                                                <Link href="/vitamin-shots/vitaboost">
                                                    <div className="service-box-items style box-shadow">
                                                        <div className="icon">
                                                            <img src="/assets/img/vitamin-shots/vitaboost.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <p>The Vitaboost vitamin shot supports your body’s natural glutathione levels to help protect cells from oxidative stress. It also promotes detoxification and overall wellness.</p>
                                                            <Link href="/vitamin-shots/vitaboost" className="theme-btn-2">Find More</Link>
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
