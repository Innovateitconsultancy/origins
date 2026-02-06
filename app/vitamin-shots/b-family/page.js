import Layout from "@/components/layout/Layout"

export const metadata = {
    title: 'B Family Vitamin Shots || Origins',
    description: 'B Family Vitamin Shots for an immune system and metabolism boost',
};

export default function BFamily() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="B Family">
                <section className="Project-details-section fix section-padding inner">
                    <div className="container">
                        <div className="project-details-wrapper">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-details-items">
                                        <div className="details-image">
                                            <img src="/assets/img/vitamin-shots/b-family-img1.jpg" alt="img" />
                                        </div>
                                        <div className="row g-4 justify-content-between">
                                            <div className="col-lg-7">
                                                <div className="details-content pt-5">
                                                    <h3>Targeted support for energy, focus & vitality</h3>
                                                    <p>B vitamins are essential for maintaining healthy energy metabolism, proper nervous system function, and overall cellular health. At Origins, our B-complex shots are thoughtfully formulated with key B vitamins and delivered via intramuscular injection to ensure rapid, efficient absorption. These injections help promote energy levels, cognitive performance, and overall well-being as part of a comprehensive approach to self-care.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="project-catagory">
                                                    <img src="/assets/img/vitamin-shots/b-family.jpg" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-lg-5 g-4 pt-5">
                                            <div className="col-lg-12">
                                                <div className="details-content">
                                                    <h3 className="mb-4">Key ingredients</h3>
                                                    <ul className="list mb-3">
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            <b>Vitamin B1 (Thiamine):</b> Assists in converting carbohydrates into energy and promotes healthy nerve and muscle function.
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            <b>Vitamin B2 (Riboflavin):</b> Supports energy production, maintains healthy skin, and contributes to antioxidant protection.
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            <b>Vitamin B3 (Niacin):</b> Helps with cellular repair, circulation, and cholesterol regulation while boosting energy metabolism.
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            <b>Vitamin B5 (Pantothenic Acid):</b> Vital for hormone production, adrenal health, and releasing energy from fats and carbohydrates.
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            <b>Vitamin B6 (Pyridoxine):</b> Aids brain function, neurotransmitter synthesis, and supports the immune system.
                                                        </li>
                                                    </ul>
                                                    <p>Together, these B vitamins work in harmony to enhance energy, support metabolism, improve mental clarity, and promote overall wellness.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-lg-5 g-4 pt-5">
                                            <div className="col-lg-4">
                                                <div className="thumb">
                                                    <img src="/assets/img/vitamin-shots/b-family-img2.jpg" alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="details-content">
                                                    <h3>Who is it for?</h3>
                                                    <ul className="list">
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Individuals feeling low energy or fatigue due to lifestyle habits or nutritional gaps.
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Those with higher B-vitamin requirements caused by stress, vigorous exercise, or limited diets.
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Vegans, vegetarians, or anyone who may struggle to obtain sufficient B vitamins from food alone.
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Those seeking to improve energy, sharpen mental clarity, and maintain optimal overall health and well-being.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-lg-5 g-4 pt-5 mt-lg-1">
                                            <div className="col-lg-10 offset-lg-1">
                                                <div className="details-content">
                                                    <h3>What are B family vitamin shots for?</h3>
                                                    <p>At Origins, our B-complex vitamin shots are carefully formulated to deliver a high-potency blend of essential B vitamins directly into the muscle, ensuring rapid and efficient absorption. These intramuscular injections are designed to support the body’s natural processes on multiple levels, from boosting energy metabolism and promoting optimal nervous system function to enhancing skin health and maintaining overall wellness. By providing these vital nutrients in a highly bioavailable form, our B vitamin shots help the body perform at its best, supporting mental clarity, reducing fatigue, and contributing to overall physical and cognitive well-being. Ideal for individuals with busy lifestyles, high stress levels, or increased nutrient demands, these injections offer a convenient and effective way to complement a healthy routine and maintain vitality.</p>
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
