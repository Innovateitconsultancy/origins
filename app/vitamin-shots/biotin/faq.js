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
                    <h2>Frequently Asked Questions<br /> about Biotin shots</h2>
                </div>
                <div className="faq-accordion mt-4 mt-md-0">
                    <div className="accordion" id="accordion">
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(1)} className={`accordion-button ${activeItem === 1 ? "" : "collapsed"}`} type="button">
                                    What are biotin shots used for?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 1 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>The benefits of biotin injections tend to develop gradually, with many individuals seeing improvements in hair and nail strength within two to four weeks. To maintain consistent results, injections are commonly scheduled every two to four weeks. Your Origins healthcare professional can recommend a personalized treatment plan based on your individual wellness goals and needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(2)} className={`accordion-button ${activeItem === 2 ? "" : "collapsed"}`} type="button">
                                    How long do biotin shots last?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 2 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>The duration of biotin injection benefits can differ from person to person, with many choosing weekly or bi-weekly treatments to support steady nutrient levels. Individual factors such as metabolism, overall nutrition, and lifestyle habits can influence how long the effects last.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(3)} className={`accordion-button ${activeItem === 3 ? "" : "collapsed"}`} type="button">
                                    How often should I get a biotin shot?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 3 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>The ideal treatment schedule varies based on your wellness objectives, existing nutrient levels, and recommendations from a qualified healthcare professional. While some individuals find weekly sessions beneficial, others may opt for bi-weekly or monthly visits depending on their needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(4)} className={`accordion-button ${activeItem === 4 ? "" : "collapsed"}`} type="button">
                                    Where can I get biotin injections?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 4 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>Biotin (vitamin B7) injections are available at Origins clinics, where experienced medical professionals provide treatments in a safe, clean, and comfortable setting. These intramuscular shots are offered as part of a personalized wellness approach to support both beauty and metabolic health. A consultation with a healthcare provider at Origins will help determine whether biotin injections are suitable for your individual needs and goals.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(5)} className={`accordion-button ${activeItem === 5 ? "" : "collapsed"}`} type="button">
                                    Are biotin shots safe?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 5 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>Biotin injections are usually well tolerated when provided by qualified medical professionals. Since biotin is a water-soluble vitamin, the body typically eliminates any excess naturally. It’s important to share any existing health conditions or medications with your clinician prior to treatment to ensure safety and suitability.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(6)} className={`accordion-button ${activeItem === 6 ? "" : "collapsed"}`} type="button">
                                    Do biotin injections hurt?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 6 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>Biotin injections are typically quick to administer and involve minimal discomfort for most individuals. Given intramuscularly in the upper arm or gluteal area, you may feel a brief pinch or slight soreness at the injection site, which usually fades within a few hours.</p>
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
                                    <p>Side effects are generally rare and mild, with some individuals noticing brief soreness at the injection site or slight flushing. In uncommon cases, mild nausea or lightheadedness may occur. If you have any known allergies or sensitivities, it’s important to inform your clinician prior to treatment.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(8)} className={`accordion-button ${activeItem === 8 ? "" : "collapsed"}`} type="button">
                                    Who should not get biotin injections?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 8 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>Biotin injections may not be appropriate for individuals who have allergies to biotin or any components of the formulation. People with certain medical conditions, including kidney, liver, or metabolic disorders, should speak with a healthcare professional before starting treatment to ensure it is safe and suitable for them.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h5 className="accordion-header">
                                <button onClick={() => handleClick(9)} className={`accordion-button ${activeItem === 9 ? "" : "collapsed"}`} type="button">
                                    Can I get a biotin shot if I'm pregnant or breastfeeding?
                                </button>
                            </h5>
                            <div className={`accordion-collapse collapse ${activeItem === 9 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>Although biotin plays an essential role during pregnancy and breastfeeding, injectable forms should only be used with medical guidance. Be sure to let your Origins clinician know if you are pregnant, planning to become pregnant, or currently nursing before receiving treatment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}