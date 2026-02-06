import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: 'NAD+ || Origins',
    description: 'NAD+ Origins IV Drip Therapy & IV Vitamin Infusions',
};

export default function NAD() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="NAD+">
                <section className="Project-details-section fix section-padding inner">
                    <div className="container">
                        <div className="project-details-wrapper">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-details-items">
                                        <div className="details-image">
                                            <img src="/assets/img/therapy/nad-img1.jpg" alt="img" />
                                        </div>
                                        <div className="row g-4 justify-content-between">
                                            <div className="col-lg-7">
                                                <div className="details-content pt-5">
                                                    <h3>Biohack your Biology with NAD+ IV Therapy</h3>
                                                    <p>NAD+ (nicotinamide adenine dinucleotide) is a vital coenzyme found in all cells of the body, playing a key role in energy production, cellular repair, and metabolic function. As we age, natural NAD+ levels decline, affecting cognitive performance, physical energy, and cellular health. IV therapy delivers NAD+ directly into the bloodstream, bypassing digestion for optimal absorption and faster, whole-body benefits that help restore vitality and overall well-being.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="project-catagory">
                                                    <img src="/assets/img/therapy/nad.jpg" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-lg-5 g-4 pt-5">
                                            <div className="col-lg-12">
                                                <div className="details-content">
                                                    <h4 className="mb-3">Key Benefits of NAD+ IV Therapy:</h4>
                                                    <ul className="list mb-3">
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            <b>Cellular Energy -</b> Helps fuel mitochondria and combat tiredness
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            <b>Brain Function -</b> Supports mental sharpness, concentration, and memory
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            <b>Healthy Aging -</b> Promotes cell repair, lowers oxidative damage, and supports longevity
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            <b>Physical Performance -</b> Improves stamina, recovery, and muscle function
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            <b>Metabolic Health -</b> Assists vital biochemical processes for balanced body function
                                                        </li>
                                                    </ul>
                                                    <p>Whether your goal is to boost everyday energy, aid recovery, or support long-term cellular wellness, Origins NAD+ IV therapy provides an advanced, science-driven approach designed to fit today’s active lifestyles. It delivers NAD+ directly into the bloodstream for fast, effective absorption and noticeable results. This targeted therapy helps restore vitality, improve focus, and support overall well-being.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-lg-5 g-4 pt-5 mt-lg-1">
                                            <div className="col-lg-5">
                                                <div className="thumb">
                                                    <img src="/assets/img/therapy/nad-img2.jpg" alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="details-content">
                                                    <h3>How does it work?</h3>
                                                    <p className="mb-3">Support your body’s metabolic processes with Nicotinamide Adenine Dinucleotide (NAD), a powerful compound known for its wide range of benefits. From enhancing brain performance and boosting energy levels to improving physical endurance and helping slow age-related decline, NAD is a popular choice for those focused on optimizing health and performance.</p>
                                                    <p className="mb-3"><b>What is it for?</b></p>
                                                    <ul className="list">
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Helps support cellular DNA restoration
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Boosts natural energy levels
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Contributes to healthy metabolic processes
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
