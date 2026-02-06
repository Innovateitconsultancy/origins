import Layout from "@/components/layout/Layout"

export const metadata = {
    title: 'IV Drip Therapy || Origins',
    description: 'IV Drip Therapy Origins IV Drip Therapy & IV Vitamin Infusions',
};

export default function IVDripTherapy() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="IV Drip Therapy">
                <section className="Project-details-section fix section-padding inner">
                    <div className="container">
                        <div className="project-details-wrapper">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-details-items">
                                        <div className="details-image">
                                            <img src="/assets/img/therapy/iv-drip-therapy-img1.jpg" alt="img" />
                                        </div>
                                        <div className="row g-4 justify-content-between">
                                            <div className="col-lg-7">
                                                <div className="details-content pt-5">
                                                    <h3>IV Drip Therapy</h3>
                                                    <p>IV drip therapy is a modern wellness treatment that delivers essential nutrients directly into the bloodstream through a cannula. By bypassing the digestive system, it ensures faster absorption and immediate effectiveness, helping support hydration, energy, immunity, and overall well-being. The therapy is safely administered by trained professionals and can be customized to meet individual health and lifestyle needs.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="project-catagory">
                                                    <img src="/assets/img/therapy/iv-drip-therapy.jpg" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="details-content pt-5">
                                            <h3>How is it administered?</h3>
                                            <p>IV drip therapy is a clinical procedure in which a customized blend of fluids, vitamins, minerals, and nutrients is infused directly into the bloodstream through a vein using an IV cannula. The cannula is gently placed into the vein and connected to a thin tube, which links to an IV bag holding the prepared solution, allowing the nutrients to flow steadily into the body.</p>
                                        </div>
                                        <div className="row g-lg-5 g-4 pt-5">
                                            <div className="col-lg-5">
                                                <div className="thumb">
                                                    <img src="/assets/img/therapy/iv-drip-therapy-img2.jpg" alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="details-content">
                                                    <h3>What are the benefits?</h3>
                                                    <p className="mb-2">
                                                        <b>Speed</b><br />
                                                        IV drip therapy delivers nutrients straight into the bloodstream, allowing the body to access them immediately.
                                                    </p>
                                                    <p className="mb-2">
                                                        <b>Efficiency</b><br />
                                                        Because the nutrients bypass the digestive system, they can be absorbed fully and utilized more effectively by the body.
                                                    </p>
                                                    <p>
                                                        <b>Convenience</b><br />
                                                        IV drip therapy sessions are typically completed within 30 to 60 minutes, making it a practical option for people with busy lifestyles who want a fast and efficient nutrient boost.
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
