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
                    <h2>Frequently Asked Questions<br /> about CoQ10 injections</h2>
                </div>
                <div className="faq-accordion mt-4 mt-md-0">
                    <div className="accordion" id="accordion">
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(1)} className={`accordion-button ${activeItem === 1 ? "" : "collapsed"}`} type="button">
                                    What are CoQ10 injections used for?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 1 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>Coenzyme Q10 (CoQ10) injections help support healthy cellular energy production, mitochondrial function, and antioxidant defense. CoQ10 is essential for converting nutrients into usable energy and contributes to overall cellular performance as well as cardiovascular health.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(2)} className={`accordion-button ${activeItem === 2 ? "" : "collapsed"}`} type="button">
                                    How long do the effects of a CoQ10 injection last?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 2 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>The length of CoQ10’s effects can vary based on factors like metabolism, activity level, and nutritional status. Many individuals opt for weekly or bi-weekly injections to sustain consistent support for energy production and overall cellular health.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(3)} className={`accordion-button ${activeItem === 3 ? "" : "collapsed"}`} type="button">
                                    How often should I get a CoQ10 injection?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 3 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>The frequency of CoQ10 injections depends on individual needs and wellness goals. Some people benefit from weekly or bi-weekly treatments, while others may follow a different schedule. Consulting a healthcare professional can help determine the most effective plan for you.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(4)} className={`accordion-button ${activeItem === 4 ? "" : "collapsed"}`} type="button">
                                    Where can I get CoQ10 injections?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 4 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>CoQ10 injections are available at Origins clinics, where trained healthcare professionals administer treatments in a safe and comfortable environment. Multiple CoQ10 formulations are offered to meet a variety of wellness goals.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(5)} className={`accordion-button ${activeItem === 5 ? "" : "collapsed"}`} type="button">
                                    Are CoQ10 injections safe?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 5 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>CoQ10 injections are typically well-tolerated when given by trained healthcare professionals. Since CoQ10 is naturally produced by the body, the risk of side effects is low. However, it’s important to inform your clinician of any existing health conditions or medications before treatment.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(6)} className={`accordion-button ${activeItem === 6 ? "" : "collapsed"}`} type="button">
                                    Do CoQ10 injections hurt?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 6 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>CoQ10 injections are generally quick and well-tolerated. Administered intramuscularly in the upper arm or glute, they may cause a brief pinch or mild soreness at the injection site, which usually resolves quickly.</p>
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
                                    <p>Side effects from CoQ10 injections are rare and usually mild. Some people may notice temporary redness or soreness at the injection site. It’s important to inform your healthcare provider of any sensitivities or medical conditions before treatment.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(8)} className={`accordion-button ${activeItem === 8 ? "" : "collapsed"}`} type="button">
                                    Who should not get CoQ10 injections?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 8 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>CoQ10 injections may not be appropriate for individuals with allergies to any of the formulation’s ingredients. If you have certain medical conditions or are taking anticoagulants or blood pressure medications, it’s important to consult your healthcare provider before receiving treatment.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(9)} className={`accordion-button ${activeItem === 9 ? "" : "collapsed"}`} type="button">
                                    Can I get a CoQ10 injection if I'm pregnant or breastfeeding?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 9 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>Although CoQ10 is naturally produced by the body, injectable forms should be used only under medical supervision during pregnancy or breastfeeding. Always let your Origins clinician know if you are pregnant, planning to conceive, or currently breastfeeding.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}