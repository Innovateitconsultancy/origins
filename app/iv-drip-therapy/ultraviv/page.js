import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: 'Ultraviv || Origins',
    description: 'Ultraviv Origins IV Drip Therapy & IV Vitamin Infusions',
};

export default function Ultraviv() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Ultraviv">
                <section className="Project-details-section fix section-padding inner">
                    <div className="container">
                        <div className="project-details-wrapper">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-details-items">
                                        <div className="details-image">
                                            <img src="/assets/img/therapy/ultraviv-img1.jpg" alt="img" />
                                        </div>
                                        <div className="row g-4 justify-content-between">
                                            <div className="col-lg-7">
                                                <div className="details-content pt-5">
                                                    <h3>Ultraviv you</h3>
                                                    <p>Ultraviv is expertly developed by our medical team with a unique combination of vitamins and supportive nutrients designed to promote hydration and enhance recovery. With our convenient mobile service, you can enjoy this IV therapy in the comfort of your own home. It’s an ideal solution for restoring energy and helping your body feel refreshed and revitalized. This personalized treatment supports overall wellness while saving you time and effort.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="project-catagory">
                                                    <img src="/assets/img/therapy/ultraviv.jpg" alt="img" />
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
                                        </div>
                                        <div className="row g-lg-5 g-4 pt-5 mt-lg-5">
                                            <div className="col-lg-5">
                                                <div className="thumb">
                                                    <img src="/assets/img/therapy/ultraviv-img2.jpg" alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="details-content">
                                                    <h3>How does it work?</h3>
                                                    <p className="mb-3">Ultraviv’s key nutrients work together to support hydration, enhance recovery, boost energy levels, and promote overall balance and well-being throughout the body.</p>
                                                    <p className="mb-3"><b>Ultraviv key nutrients contributes to:</b></p>
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
                                                            Aids in the normal formation of red blood cells
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Helps reduce feelings of tiredness and fatigue
                                                        </li>
                                                    </ul>
                                                    <p>Before receiving the IV therapy, you will have a consultation with a qualified medical professional to confirm that the treatment is suitable for your needs. If necessary, you may also be advised or referred to your GP following the assessment.</p>
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
