import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: 'Megaboost || Origins',
    description: 'Megaboost Origins IV Drip Therapy & IV Vitamin Infusions',
};

export default function Megaboost() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Megaboost">
                <section className="Project-details-section fix section-padding inner">
                    <div className="container">
                        <div className="project-details-wrapper">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-details-items">
                                        <div className="details-image">
                                            <img src="/assets/img/therapy/megaboost-img1.jpg" alt="img" />
                                        </div>
                                        <div className="row g-4 justify-content-between">
                                            <div className="col-lg-7">
                                                <div className="details-content pt-5">
                                                    <h3>The Signature IV</h3>
                                                    <p>Created to promote overall wellness, the Megaboost infusion delivers a powerful mix of B vitamins, vitamin C, and essential minerals in a single drip to help support the body’s nutritional needs. It supports energy levels, immune health, and recovery while helping the body function at its best. This comprehensive blend is ideal for those looking to boost vitality and maintain balance. The infusion provides fast absorption for quick and effective results.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="project-catagory">
                                                    <img src="/assets/img/therapy/megaboost.jpg" alt="img" />
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
                                        </div>
                                        <div className="row g-lg-5 g-4 pt-5">
                                            <div className="col-lg-12">
                                                <div className="section-title mb-0">
                                                    <h2>Also contains the nutrients</h2>
                                                </div>
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
                                        </div>
                                        <div className="row g-lg-5 g-4 pt-5 mt-lg-5">
                                            <div className="col-lg-5">
                                                <div className="thumb">
                                                    <img src="/assets/img/therapy/megaboost-img2.jpg" alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="details-content">
                                                    <h3>How does it work?</h3>
                                                    <p className="mb-3">Megaboost’s key nutrients work together to support energy production, immune function, recovery, and overall well-being.</p>
                                                    <p className="mb-3"><b>Megaboost key nutrients contribute to:</b></p>
                                                    <ul className="list">
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
                                                            Helps maintain normal homocysteine processing
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Supports healthy mental and psychological function
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Aids in the normal formation of red blood cells
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Promotes normal collagen production for tissues and skin
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Strengthens normal immune system function
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Helps reduce feelings of tiredness and fatigue
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Assists in restoring active vitamin E levels
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Enhances the body’s absorption of iron
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Supports the body during acute infections
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
                                                <Link href="/vitamin-shots/biotin">
                                                    <div className="service-box-items style box-shadow">
                                                        <div className="icon">
                                                            <img src="/assets/img/vitamin-shots/biotin.svg" alt="icon-img" />
                                                        </div>
                                                        <div className="content">
                                                            <p>Helps maintain the normal appearance of hair and skin, while also supporting a normal metabolism and normal psychological function. It also contributes to overall energy levels and daily well-being.</p>
                                                            <Link href="/vitamin-shots/biotin" className="theme-btn-2">Find More</Link>
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
