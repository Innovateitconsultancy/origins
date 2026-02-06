import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: 'Vitaglow || Origins',
    description: 'Vitaglow Origins IV Drip Therapy & IV Vitamin Infusions',
};

export default function Vitaglow() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Vitaglow">
                <section className="Project-details-section fix section-padding inner">
                    <div className="container">
                        <div className="project-details-wrapper">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-details-items">
                                        <div className="details-image">
                                            <img src="/assets/img/therapy/vitaglow-img1.jpg" alt="img" />
                                        </div>
                                        <div className="row g-4 justify-content-between">
                                            <div className="col-lg-7">
                                                <div className="details-content pt-5">
                                                    <h3>Go for the glow</h3>
                                                    <p>Packed with nourishing ingredients, Vitaglow is designed to support overall wellness while helping maintain healthy skin, hair, and nails. It promotes natural radiance from within and supports the body’s essential functions. This infusion is ideal for those looking to enhance beauty and vitality together. The nutrients are delivered efficiently for fast, visible results. It also helps support hydration and cellular renewal for a refreshed glow.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="project-catagory">
                                                    <img src="/assets/img/therapy/vitaglow.jpg" alt="img" />
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
                                                    <img src="/assets/img/therapy/vitaglow-img2.jpg" alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="details-content">
                                                    <h3>How does it work?</h3>
                                                    <p className="mb-3">Vitaglow’s key nutrients work together to support healthy skin, strengthen hair and nails, promote overall wellness, and enhance the body’s natural glow from within.</p>
                                                    <p className="mb-3"><b>Vitaglow key nutrients contribute to:</b></p>
                                                    <ul className="list">
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Supports healthy collagen production in the body
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Contributes to proper functioning of the nervous system
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Helps maintain normal mental and psychological function
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Strengthens normal immune system activity
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
                                                            Enhances the body’s ability to absorb iron
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
