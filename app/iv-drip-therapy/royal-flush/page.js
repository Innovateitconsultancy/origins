import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: 'Royal Flush || Origins',
    description: 'Royal Flush Origins IV Drip Therapy & IV Vitamin Infusions',
};

export default function RoyalFlush() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Royal Flush">
                <section className="Project-details-section fix section-padding inner">
                    <div className="container">
                        <div className="project-details-wrapper">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-details-items">
                                        <div className="details-image">
                                            <img src="/assets/img/therapy/royal-flush-img1.jpg" alt="img" />
                                        </div>
                                        <div className="row g-4 justify-content-between">
                                            <div className="col-lg-7">
                                                <div className="details-content pt-5">
                                                    <h3>Recover your wellness</h3>
                                                    <p>Bringing together the powerful benefits of Ultraviv, Megaboost, and Vitaglow, Royal Flush is our most complete recovery infusion. Enriched with a wide range of vitamins, minerals, and essential nutrients, this advanced IV drip is designed to support effective recovery and overall wellness. It helps restore energy levels, support immunity, and promote hydration. This premium blend is ideal for full-body revitalization and peak performance.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="project-catagory">
                                                    <img src="/assets/img/therapy/royal-flush.jpg" alt="img" />
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
                                        <div className="row g-lg-5 g-4 pt-5">
                                            <div className="col-lg-12">
                                                <div className="section-title mb-0">
                                                    <h2>Also contains the nutrients</h2>
                                                </div>
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
                                                <Link href="/nutrients/vitamin-c">
                                                    <div className="service-box-items box-shadow small">
                                                        <div className="icon">
                                                            <img src="/assets/img/nutrients/vitamin-c.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Vitamin C</h4>
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
                                                <Link href="/nutrients/selenium">
                                                    <div className="service-box-items box-shadow small">
                                                        <div className="icon">
                                                            <img src="/assets/img/nutrients/selenium.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <h4>Selenium</h4>
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
                                                <Link href="/nutrients/glutathione">
                                                    <div className="service-box-items box-shadow small">
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
                                        <div className="row g-lg-5 g-4 pt-5 mt-lg-5">
                                            <div className="col-lg-5">
                                                <div className="thumb">
                                                    <img src="/assets/img/therapy/royal-flush-img2.jpg" alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="details-content">
                                                    <h3>How does it work?</h3>
                                                    <p className="mb-2">Royal Flush’s key nutrients work together to support recovery, boost energy levels, strengthen immunity, promote hydration, and enhance overall well-being.</p>
                                                    <p className="mb-3"><b>Royal Flush key nutrients contribute to:</b></p>
                                                    <ul className="list mb-3">
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Supports healthy energy production in the body
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Contributes to proper functioning of the nervous system
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Helps maintain normal red blood cell levels
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Aids in the healthy processing of iron
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Supports normal protein and glycogen metabolism
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Helps regulate balanced hormone activity
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Assists in the breakdown of mucus in the body
                                                        </li>
                                                    </ul>
                                                    <p>You will first have an assessment with a qualified medical professional to confirm that the IV therapy is suitable for your needs. Following the consultation, you may be advised to visit or be referred to your GP if further care is required.</p>
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
