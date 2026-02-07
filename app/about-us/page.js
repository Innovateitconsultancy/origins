import Layout from "@/components/layout/Layout"

export const metadata = {
    title: 'About Us || Origins',
    description: 'About Us Origins IV Drip Therapy & IV Vitamin Infusions',
};

export default function AboutUs() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
                <section className="Project-details-section fix section-padding inner">
                    <div className="container">
                        <div className="project-details-wrapper">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-details-items">
                                        <div className="details-image">
                                            <img src="/assets/img/about-img1.jpg" alt="img" />
                                        </div>
                                        <div className="row g-4 justify-content-between">
                                            <div className="col-lg-7">
                                                <div className="details-content pt-5">
                                                    <h3>Dedicated to redefining human wellness</h3>
                                                    <p>As a global authority in precision nutrition, Origins is a multidisciplinary team of doctors, pharmacists, and scientists committed to developing nutritional therapies grounded in scientific evidence. We are ushering in a new era of healthcare by making precision nutrition accessible and easy to understand for everyone. Our goal is to empower individuals to take control of their health with personalized, science-backed solutions.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="project-catagory">
                                                    <img src="/assets/img/about-img2.jpg" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-lg-5 g-4 pt-5">
                                            <div className="col-lg-12">
                                                <div className="details-content">
                                                    <h3>Pioneering the way in targeted nutrition</h3>
                                                    <p className="mb-4">Since our founding, we have grown from a single clinic in Miami into a worldwide brand, offering safe and effective IV drip therapies and vitamin booster shots. Our mission is to empower individuals to make proactive health decisions by understanding their bodies and unique nutritional needs, supporting long-term well-being.</p>
                                                    <h3>Investing in life sciences and genetics to unlock new possibilities</h3>
                                                    <p className="mb-3">As a leading authority in precision nutrition, Origins’ Life Science team is dedicated to designing and advancing personalized intravenous and intramuscular therapies based on robust scientific evidence.</p>
                                                    <p>By exploring the fields of genetics, epigenetics, and nutrigenomics, we have built a specialized team committed to ongoing research and the continuous development of our products and services. Through rigorous clinical studies, we assess both the effectiveness and safety of our nutritional therapies, ensuring that science remains at the heart of everything we deliver.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-lg-5 g-4 pt-5">
                                            <div className="col-lg-5">
                                                <div className="thumb">
                                                    <img src="/assets/img/about-img3.jpg" alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="details-content">
                                                    <h3>Our multidisciplinary team, a wealth of knowledge</h3>
                                                    <p className="mb-3">At Origins, we are a collaborative team pushing the boundaries of human science. Experts from multiple disciplines come together to design and deliver innovative therapies focused on optimizing personalized nutritional solutions.</p>
                                                    <p className="mb-3"><b>Our team consists of experts in</b></p>
                                                    <ul className="list mb-4">
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Clinical Medicine & Nursing
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Pharmacology
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Biomedical Science
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Food & Nutritional Science
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Genetics
                                                        </li>
                                                    </ul>
                                                    <h3>Our journey</h3>
                                                    <p className="mb-3">Origins is at the forefront of precision nutrition, driving a scientific movement to deliver personalized solutions worldwide. We believe that optimal nutrition is the foundation of good health, and our mission is to enhance your well-being through tailored recommendations, nourishing therapies, and genetic insights. By taking a proactive approach to your health, you can support your long-term wellness-start your Origins journey today.</p>
                                                    <p>Our broader mission is to empower individual health and wellness journeys across the global population.</p>
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
