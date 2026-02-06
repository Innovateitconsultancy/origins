import Layout from "@/components/layout/Layout"

export const metadata = {
    title: 'Personalised IV || Origins',
    description: 'Personalised IV Origins IV Drip Therapy & IV Vitamin Infusions',
};

export default function PersonalisedIV() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Personalised IV">
                <section className="Project-details-section fix section-padding inner">
                    <div className="container">
                        <div className="project-details-wrapper">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-details-items">
                                        <div className="details-image">
                                            <img src="/assets/img/therapy/personalised-iv-img1.jpg" alt="img" />
                                        </div>
                                        <div className="row g-4 justify-content-between">
                                            <div className="col-lg-7">
                                                <div className="details-content pt-5">
                                                    <h3>IV nutrition designed for you</h3>
                                                    <p>Origins combines advanced scientific research with modern technology to create highly personalized wellness solutions tailored to individual needs. This innovative approach allows each treatment to be precisely crafted to support the body’s unique requirements, ensuring optimal effectiveness and results. It delivers a truly customized wellness experience focused on long-term health, vitality, and overall well-being.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="project-catagory">
                                                    <img src="/assets/img/therapy/personalised-iv.jpg" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-lg-5 g-4 pt-5 mt-lg-1">
                                            <div className="col-lg-5">
                                                <div className="thumb">
                                                    <img src="/assets/img/therapy/personalised-iv-img2.jpg" alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="details-content">
                                                    <h3>What does it do?</h3>
                                                    <p className="mb-3">Origins’ personalized IV drip therapy takes customization to the next level by blending advanced science with innovative technology to create fully tailored formulations. Using the goals or symptoms you enter into Origins’ IV builder, IV Formulate, smart algorithms design a precise mix of nutrients to support optimal, individualized wellness and targeted results.</p>
                                                    <p>No matter what your wellness objective may be, Origins’ advanced algorithms are designed to create a customized combination of essential nutrients specifically tailored to your individual needs. By analyzing your goals, lifestyle, and desired outcomes, this intelligent system goes beyond standard recommendations to deliver a truly personalized wellness solution. This innovative approach ensures that each formulation is precisely balanced to support optimal health, improved performance, and long-term vitality, redefining what personalized care can achieve.</p>
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
