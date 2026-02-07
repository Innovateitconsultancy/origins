'use client'
import { useState } from 'react';
export default function Faq() {

    const [activeItem, setActiveItem] = useState(1);

    const handleClick = (id) => {
        setActiveItem(activeItem === id ? null : id)
    }

    return (
        <>
            <div className="faq-content">
                <div className="section-title text-center">
                    <h2>Frequently Asked Questions<br /> about B family shots</h2>
                </div>
                <div className="faq-accordion mt-4 mt-md-0">
                    <div className="accordion" id="accordion">
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(1)} className={`accordion-button ${activeItem === 1 ? "" : "collapsed"}`} type="button">
                                    What’s the difference between B12 shots and B family shots?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 1 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>The primary distinction is in the variety of B vitamins provided:</p>
                                    <p>B12 injections contain only vitamin B12, often as methylcobalamin, which is essential for supporting energy metabolism, red blood cell production, and healthy nervous system function.</p>
                                    <p>B-complex (B family) shots, on the other hand, deliver a wider range of B vitamins. This combination supports multiple aspects of health, including maintaining energy, enhancing cognitive and immune function, promoting healthy skin, and supporting overall metabolism.</p>
                                    <p>In short, B12 shots provide targeted support with a single vitamin, while B-complex shots offer a comprehensive blend designed to support overall wellness as part of a balanced health routine.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(2)} className={`accordion-button ${activeItem === 2 ? "" : "collapsed"}`} type="button">
                                    Where can I get B family injections?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 2 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>B-complex vitamin shots are available at Origins clinics, where our experienced medical team provides safe, wellness-focused care in a comfortable and hygienic environment. These injections deliver a concentrated blend of essential B vitamins designed to support energy production, mental performance, and immune system health.</p>
                                    <p>Whether juggling a busy lifestyle, coping with stress, or aiming to maintain healthy nutrient levels, Origins’ B-complex injections are a trusted choice for those looking to support overall wellness through proactive self-care.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(3)} className={`accordion-button ${activeItem === 3 ? "" : "collapsed"}`} type="button">
                                    Are B family injections safe?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 3 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>B-complex vitamin injections are widely regarded as safe when given by trained healthcare professionals. Because B vitamins are water-soluble, the body usually flushes out any excess rather than storing it, which helps minimize the risk of accumulation or toxicity.</p>
                                    <p>At Origins, every injection is delivered in a professional clinical setting using premium, medical-grade formulations, with care provided by qualified healthcare professionals to ensure the highest safety and treatment standards.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(4)} className={`accordion-button ${activeItem === 4 ? "" : "collapsed"}`} type="button">
                                    How long does a B family injection typically last?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 4 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>The duration and response to a B-complex vitamin injection can differ between individuals, with benefits commonly lasting about five to seven days depending on metabolism, nutrient levels, and lifestyle habits. Many people notice improvements in energy or overall wellness within hours to a few days following their injection.</p>
                                    <p>B vitamins play an important role in processes like energy generation, nervous system function, and the body’s ability to manage everyday stress. For individuals with active schedules or higher nutritional needs, B-complex injections given weekly or every two weeks are commonly incorporated into a wellness plan to help provide steady nutrient support.</p>
                                    <p>Since nutritional needs vary from person to person, speaking with a qualified healthcare professional is the best way to determine the ideal treatment frequency for you.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(5)} className={`accordion-button ${activeItem === 5 ? "" : "collapsed"}`} type="button">
                                    How long does it take for a B Family injection to “work”?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 5 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>Many individuals notice the effects of a B-complex vitamin injection within a few hours to one day after receiving it, though the exact response time can differ depending on personal factors such as:</p>
                                    <ul>
                                        <li>Nutritional status</li>
                                        <li>Metabolism</li>
                                        <li>Level of deficiency</li>
                                        <li>Overall health</li>
                                    </ul>
                                    <p>Some people experience a boost in energy, better mood, and sharper mental focus shortly after their injection. For others, particularly those with greater nutrient deficiencies, the positive effects may become more apparent after several regular treatments.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(6)} className={`accordion-button ${activeItem === 6 ? "" : "collapsed"}`} type="button">
                                    Do B family injections hurt?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 6 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>B-complex vitamin injections are generally quick and well tolerated by most individuals. They are given intramuscularly, usually in the upper arm or gluteal area, and take only a few moments to administer. Some people may feel a brief pinch or slight pressure, with occasional mild soreness at the injection site that typically fades within a few hours.</p>
                                    <p>At Origins, our trained medical professionals use precise, gentle techniques to ensure each injection is delivered safely and comfortably.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(7)} className={`accordion-button ${activeItem === 7 ? "" : "collapsed"}`} type="button">
                                    Are there any side effects?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 7 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>B-complex vitamin injections are typically well tolerated; however, as with most intramuscular treatments, minor side effects may occasionally occur, including:</p>
                                    <ul>
                                        <li>Temporary soreness, redness, or swelling at the injection site</li>
                                        <li>Mild flushing (particularly due to niacin, or vitamin B3)</li>
                                        <li>Occasional lightheadedness or mild nausea, which typically passes quickly</li>
                                    </ul>
                                    <p>More serious responses are rare, particularly when the injections are administered by qualified medical professionals. If you have any known allergies or sensitivities to B vitamins or other components of the formula, it’s important to let your healthcare provider know before treatment.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(8)} className={`accordion-button ${activeItem === 8 ? "" : "collapsed"}`} type="button">
                                    Who should not get a B family injection?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 8 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>Although B-complex vitamin injections are usually safe for most individuals, they may not be appropriate for everyone. It’s important to consult a healthcare professional before treatment, particularly if you:</p>
                                    <ul>
                                        <li>Have a known allergy or sensitivity to any components of the injection</li>
                                        <li>Are managing a chronic medical condition such as kidney, liver, or blood disorders</li>
                                        <li>Are undergoing treatment for cancer or other serious health conditions</li>
                                        <li>Have concerns related to nutrient storage or metabolism, such as iron overload</li>
                                    </ul>
                                    <p>A professional medical consultation is important to assess whether B vitamin injections are suitable for your personal health needs and wellness objectives.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(9)} className={`accordion-button ${activeItem === 9 ? "" : "collapsed"}`} type="button">
                                    Can I get a B family vitamin shot if I'm pregnant or breastfeeding?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 9 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>B vitamins are essential during pregnancy and breastfeeding and are commonly included in prenatal nutrition plans. However, injectable B vitamins should only be considered during these stages under the supervision of a qualified healthcare professional.</p>
                                    <p>If you are pregnant, planning to become pregnant, or currently nursing, be sure to inform your Origins clinician so your individual needs can be properly evaluated and treatments can be provided safely and appropriately.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}