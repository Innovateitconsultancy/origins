import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: 'Formerly HELIIX || Origins',
    description: 'Formerly HELIIX Origins IV Drip Therapy & IV Vitamin Infusions',
};

export default function FormerlyHeliix() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Formerly HELIIX">
                <section className="Project-details-section fix section-padding inner">
                    <div className="container">
                        <div className="project-details-wrapper">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-details-items">
                                        <div className="details-image">
                                            <img src="/assets/img/therapy/formerly-heliix-img1.jpg" alt="img" />
                                        </div>
                                        <div className="row g-4 justify-content-between">
                                            <div className="col-lg-7">
                                                <div className="details-content pt-5">
                                                    <h3>The ultimate in wellness</h3>
                                                    <p>Origins’ premium IV infusion features a carefully selected blend of ingredients such as zinc, alpha-lipoic acid, glutathione, methylcobalamin, and vitamin B12, designed to support a full-body wellness experience from head to toe. It helps boost energy, strengthen immunity, and support the body’s natural detox processes. This advanced formula promotes overall balance and revitalization. The nutrients are delivered efficiently for fast and effective results.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="project-catagory">
                                                    <img src="/assets/img/therapy/formerly-heliix.jpg" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-lg-5 g-4 pt-5 mt-lg-1">
                                            <div className="col-lg-5">
                                                <div className="thumb">
                                                    <img src="/assets/img/therapy/formerly-heliix-img2.jpg" alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="details-content">
                                                    <h3>How does it work?</h3>
                                                    <p className="mb-2">The new Origins IV has been carefully developed by Origins’ team of medical experts and scientists to provide a powerful blend of antioxidants, including vitamin C, glutathione, and alpha-lipoic acid, which work together to support detoxification and combat oxidative stress. This formula is complemented by a balanced mix of vitamins and minerals that help fuel cellular health, enhance energy production, and strengthen the immune system.</p>
                                                    <p className="mb-3"><b>What is it for?</b></p>
                                                    <ul className="list mb-3">
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Helps support the body’s natural detox processes
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Promotes healthy collagen production
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Supports healthy aging and longevity
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Contributes to balanced energy levels, mood, and sleep quality
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
