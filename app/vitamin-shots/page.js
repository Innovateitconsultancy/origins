import Layout from "@/components/layout/Layout"

export const metadata = {
    title: 'Vitamin Shots || Origins',
    description: 'Vitamin Shots for an immune system and metabolism boost',
};

export default function VitaminShots() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Vitamin Shots">
                <section className="Project-details-section fix section-padding inner">
                    <div className="container">
                        <div className="project-details-wrapper">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-details-items">
                                        <div className="details-image">
                                            <img src="/assets/img/vitamin-shots/vitamin-shots-img1.jpg" alt="img" />
                                        </div>
                                        <div className="row g-4 justify-content-between">
                                            <div className="col-lg-7">
                                                <div className="details-content pt-5">
                                                    <h3>IM vitamin shots</h3>
                                                    <p>IM vitamin injections are an effective way to deliver essential nutrients straight into the muscle, allowing for rapid absorption and quicker benefits compared to oral supplements. At Origins, we offer a diverse selection of targeted vitamin shots carefully formulated to enhance energy levels, support immunity, improve metabolism, and promote overall wellness, making it easy for individuals with busy schedules to maintain optimal nutrient levels without the need for daily pills.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="project-catagory">
                                                    <img src="/assets/img/vitamin-shots/vitamin-shots.jpg" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="details-content pt-5">
                                            <h3>How is it administered?</h3>
                                            <p>An intramuscular (IM) vitamin shot is a method of delivering essential vitamins and nutrients directly into the muscle, typically the deltoid or gluteal area. This approach bypasses the digestive system, allowing the nutrients to be absorbed rapidly into the bloodstream for faster and more effective results. At Origins, our IM vitamin shots are carefully formulated to support overall wellness, boost energy, enhance immunity, and promote optimal bodily function, offering a convenient and efficient solution for individuals looking to maintain their health even with a busy lifestyle.</p>
                                        </div>
                                        <div className="row g-lg-5 g-4 pt-5">
                                            <div className="col-lg-5">
                                                <div className="thumb">
                                                    <img src="/assets/img/vitamin-shots/vitamin-shots-img2.jpg" alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="details-content">
                                                    <h3>Why vitamin shots?</h3>
                                                    <p className="mb-2">
                                                        <b>Nutrients</b><br />
                                                        Origins vitamin shots provide a variety of essential nutrients, including vitamin D-the “sunshine vitamin”-as well as vitamins C and B12, among others. These vital nutrients play a key role in supporting overall health and helping the body function at its best.
                                                    </p>
                                                    <p className="mb-2">
                                                        <b>Duration</b><br />
                                                        Vitamin shots require minimal time at the clinic, offering a fast and convenient solution for individuals with busy schedules.
                                                    </p>
                                                    <p>
                                                        <b>Route</b><br />
                                                        Nutrition can be obtained through a balanced diet and supplements, with vitamin shots offering an additional, effective option. These injections are delivered directly into the muscle, allowing the body to absorb the nutrients efficiently.
                                                    </p>
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
