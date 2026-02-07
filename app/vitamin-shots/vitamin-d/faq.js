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
                    <h2>Frequently Asked Questions<br /> about Vitamin D shots</h2>
                </div>
                <div className="faq-accordion mt-4 mt-md-0">
                    <div className="accordion" id="accordion">
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(1)} className={`accordion-button ${activeItem === 1 ? "" : "collapsed"}`} type="button">
                                    Where can I get vitamin D injections?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 1 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>Vitamin D injections can be received at Origins clinics and other licensed medical centers that provide wellness and vitamin therapies. Opting for a reputable, medically supervised clinic ensures you get high-quality, personalized care. At Origins, every vitamin D injection is administered by trained healthcare professionals in adherence to strict safety standards. These injections are an excellent choice for individuals seeking to support bone health, immune function, and overall wellness, particularly when sun exposure is limited.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(2)} className={`accordion-button ${activeItem === 2 ? "" : "collapsed"}`} type="button">
                                    Are vitamin D injections safe?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 2 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>Vitamin D injections are generally safe and effective when administered by qualified healthcare professionals. They provide a reliable method to increase vitamin D levels, particularly for individuals with absorption challenges or significant deficiencies. As with any medical treatment, your healthcare provider will evaluate your individual health before recommending injections. At Origins, all procedures follow strict safety protocols to ensure your treatment aligns with your overall wellness goals.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(3)} className={`accordion-button ${activeItem === 3 ? "" : "collapsed"}`} type="button">
                                    How long does a vitamin D injection typically last?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 3 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>Vitamin D injections can help sustain optimal vitamin D levels for weeks to months, depending on your baseline status and lifestyle. Unlike daily supplements, these injections deliver a concentrated dose directly into the muscle, allowing for gradual, steady absorption over time. This makes them a convenient option for those seeking long-lasting support for immune function, bone health, and energy metabolism.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(4)} className={`accordion-button ${activeItem === 4 ? "" : "collapsed"}`} type="button">
                                    How long does it take for a vitamin D injection to work?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 4 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>Most people start noticing benefits, such as improved energy, enhanced mood, and better immune resilience, within a few days to weeks after treatment. However, the exact timeframe depends on factors like your starting vitamin D status, diet, general health, and lifestyle. Because vitamin D plays a key role in many bodily functions, restoring optimal levels supports your overall well-being.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(5)} className={`accordion-button ${activeItem === 5 ? "" : "collapsed"}`} type="button">
                                    Do vitamin D injections hurt?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 5 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>Vitamin D injections are given intramuscularly and are generally well-tolerated, causing minimal discomfort. You may notice a quick pinch during administration and slight soreness at the injection site, which usually fades quickly. For most individuals, this minor discomfort is outweighed by the benefits, including support for bone strength, immune health, and overall well-being.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(6)} className={`accordion-button ${activeItem === 6 ? "" : "collapsed"}`} type="button">
                                    Are there any side effects?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 6 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>Vitamin D injections are typically well-tolerated, with mild side effects such as temporary soreness, redness, or swelling at the injection site. Serious reactions are rare and usually occur only with excessive doses. At Origins clinics, all injections follow strict dosage guidelines to ensure a safe and effective treatment experience.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(7)} className={`accordion-button ${activeItem === 7 ? "" : "collapsed"}`} type="button">
                                    Who should avoid vitamin D injections?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 7 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>People with specific medical conditions should speak with a healthcare professional before receiving vitamin D injections. Conditions like hypercalcemia, certain kidney disorders, or parathyroid issues may require alternative approaches. A thorough health assessment ensures that vitamin D therapy is safe and appropriate for your individual needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(8)} className={`accordion-button ${activeItem === 8 ? "" : "collapsed"}`} type="button">
                                    Can I get a vitamin D shot if I’m pregnant or breastfeeding?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 8 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>Vitamin D injections can be helpful during pregnancy or breastfeeding, as adequate vitamin D is important for both maternal and infant health. It’s crucial to consult your healthcare provider before starting treatment to ensure safety. At Origins, our clinicians can collaborate with your medical team to support your wellness during this important stage of life.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}