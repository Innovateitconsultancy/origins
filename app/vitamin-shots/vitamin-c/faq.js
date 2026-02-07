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
                    <h2>Frequently Asked Questions<br /> about Vitamin C shots</h2>
                </div>
                <div className="faq-accordion mt-4 mt-md-0">
                    <div className="accordion" id="accordion">
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(1)} className={`accordion-button ${activeItem === 1 ? "" : "collapsed"}`} type="button">
                                    Where can I get vitamin C injections?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 1 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>Vitamin C injections are available at Origins clinics, where experienced healthcare professionals provide treatments in a safe, comfortable, and clinical setting.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(2)} className={`accordion-button ${activeItem === 2 ? "" : "collapsed"}`} type="button">
                                    Are vitamin C injections safe?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 2 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>Vitamin C injections are generally safe for most individuals when given by qualified healthcare professionals. At Origins, every treatment is performed according to strict medical standards to ensure safety and peace of mind.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(3)} className={`accordion-button ${activeItem === 3 ? "" : "collapsed"}`} type="button">
                                    How long does a vitamin C injection typically last?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 3 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>The benefits of a vitamin C injection can persist for several days up to a week, varying based on factors like lifestyle, metabolism, and existing vitamin C levels. Ongoing treatments help sustain consistent wellness effects.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(4)} className={`accordion-button ${activeItem === 4 ? "" : "collapsed"}`} type="button">
                                    How long does it take for a vitamin C injection to work?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 4 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>Many individuals notice effects such as increased energy or reduced fatigue within hours to a day after receiving a vitamin C injection. Improvements in skin health and immune support typically develop gradually with regular, consistent treatments.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(5)} className={`accordion-button ${activeItem === 5 ? "" : "collapsed"}`} type="button">
                                    Do vitamin C injections hurt?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 5 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>Most individuals feel only minimal discomfort during a vitamin C injection. The procedure is quick, and any mild sensation usually fades shortly after administration.</p>
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
                                    <p>Side effects from vitamin C injections are uncommon but can include mild redness, swelling, or tenderness at the injection site. Occasionally, some individuals may experience minor headaches or digestive discomfort. At Origins, all treatments are performed under the supervision of trained healthcare professionals to ensure safety and minimize any potential risks.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(7)} className={`accordion-button ${activeItem === 7 ? "" : "collapsed"}`} type="button">
                                    Who should not get a vitamin C injection?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 7 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>People with specific health conditions, such as kidney disease or a history of oxalate kidney stones, may need to avoid high-dose vitamin C injections. It’s important to consult a qualified healthcare professional before beginning treatment to ensure safety and suitability.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(8)} className={`accordion-button ${activeItem === 8 ? "" : "collapsed"}`} type="button">
                                    Can I get a vitamin C injection if I'm pregnant or breastfeeding?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 8 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>If you are pregnant or breastfeeding, speak with your healthcare provider before receiving a vitamin C injection. Although vitamin C is important during pregnancy, the appropriate dosage and method of administration should be determined by a qualified professional to ensure safety.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}