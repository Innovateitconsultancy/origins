'use client'
import Link from "next/link"
import { useState } from 'react'

export default function MobileMenu() {
    const [activeItem, setActiveItem] = useState(null);
    const [activeItemSub, setActiveItemSub] = useState(null);

    console.log(activeItem, activeItemSub);

    const handleActiveItem = (index) => {
        setActiveItem(prev => (prev === index ? null : index));
    };

    const handleActiveItemSub = (index) => {
        setActiveItemSub(prev => (prev === index ? null : index));
    };

    return (
        <>
            <div className="mobile-menu fix mb-3 mean-container">
                <div className="mean-bar">
                    <Link href="/#nav" className="meanmenu-reveal" style={{ right: 0, left: 'auto', display: 'inline' }}>
                        <span>
                            <span><span />
                            </span>
                        </span>
                    </Link>
                    <nav className="mean-nav">
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="#">IV Drip Therapy</Link>
                                <ul className="submenu" style={{ display: `${activeItem === 2 ? "block" : "none"}` }}>
                                    <li>
                                        <Link href="/iv-drip-therapy">IV Drip Therapy</Link>
                                    </li>
                                    <li>
                                        <Link href="/iv-drip-therapy/miniboost">
                                            Miniboost
                                            <span>Wellness & Detox</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/iv-drip-therapy/hydromax">
                                            Hydromax
                                            <span>Hydration & Recovery</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/iv-drip-therapy/ultraviv">
                                            Ultraviv
                                            <span>Recovery</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/iv-drip-therapy/megaboost">
                                            Megaboost
                                            <span>Wellness</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/iv-drip-therapy/vitaglow">
                                            Vitaglow
                                            <span>Beauty & Pro-Aging</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            Royal Flush
                                            <span>Recovery</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            Formerly HELIIX
                                            <span>Detox</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            NAD+
                                            <span>Wellness</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            Personalised IV
                                            <span>Tailored to your Goals</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            Ultraviv PRO
                                            <span>Recovery</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            The Signature 10X IV
                                            <span>Specialty / Wellness</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            Harrods Signature IV Therapy
                                            <span>Advanced Formulation for Wellness</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            Methylene Blue
                                            <span>Cellular Energy & Brain Support</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            Trichology
                                            <span>Hair, Scalp & Cellular Support</span>
                                        </Link>
                                    </li>
                                </ul>
                                <a className={`mean-expand ${activeItem === 2 ? "mean-clicked" : ""}`} onClick={() => handleActiveItem(2)}>
                                    <i className="far fa-plus" />
                                </a>
                            </li>
                            <li>
                                <Link href="#">Vitamin Shots</Link>
                                <ul className="submenu" style={{ display: `${activeItem === 3 ? "block" : "none"}` }}>
                                    <li>
                                        <Link href="/vitamin-shots">Vitamin Shots</Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            B Family
                                            <span>Energy Metabolism & Nervous System</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            Biotin
                                            <span>Healthy Skin, Hair, & Energy Levels</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            Vitamin C
                                            <span>Supports Immune System, Recovery & Collagen Production</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            Vitamin D
                                            <span>Supports Immunity, Bone Strength & Overall Wellness</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            CoQ10 Family
                                            <span>Supports Fitness, Heart Health & Cellular Energy</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            NAD+ IM
                                            <span>Cellular Energy & Healthy Aging Support</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            Vitaboost
                                            <span>Cellular Antioxidant & Detoxification Support</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            Slimboost
                                            <span>Supports Metabolism & Fat Processing</span>
                                        </Link>
                                    </li>
                                </ul>
                                <a className={`mean-expand ${activeItem === 3 ? "mean-clicked" : ""}`} onClick={() => handleActiveItem(3)}>
                                    <i className="far fa-plus" />
                                </a>
                            </li>
                            <li>
                                <Link href="#">Our Services</Link>
                                <ul className="submenu" style={{ display: `${activeItem === 4 ? "block" : "none"}` }}>
                                    <li>
                                        <Link href="/">Mobile IV Therapy</Link>
                                        <Link href="/">Group Bookings</Link>
                                        <Link href="/">Corporate Events</Link>
                                    </li>
                                </ul>
                                <a className={`mean-expand ${activeItem === 4 ? "mean-clicked" : ""}`} onClick={() => handleActiveItem(4)}>
                                    <i className="far fa-plus" />
                                </a>
                            </li>
                            <li>
                                <Link href="#">Genetics</Link>
                                <ul className="submenu" style={{ display: `${activeItem === 5 ? "block" : "none"}` }}>
                                    <li>
                                        <Link href="/">Precision Nutrition</Link>
                                        <Link href="/">Precision IV</Link>
                                        <Link href="/">Blood Testing</Link>
                                    </li>
                                </ul>
                                <a className={`mean-expand ${activeItem === 5 ? "mean-clicked" : ""}`} onClick={() => handleActiveItem(5)}>
                                    <i className="far fa-plus" />
                                </a>
                            </li>
                            <li>
                                <Link href="#">Nutrients</Link>
                                <ul className="submenu" style={{ display: activeItem === 6 ? "block" : "none" }}>
                                    <li>
                                        <Link href="#">Minerals / Metals</Link>
                                        <ul className="submenu" style={{ display: activeItemSub === 61 ? "block" : "none" }}>
                                            <li><Link href="/magnesium">Magnesium</Link></li>
                                            <li><Link href="/zinc">Zinc</Link></li>
                                            <li><Link href="/selenium">Selenium</Link></li>
                                            <li><Link href="/manganese">Manganese</Link></li>
                                            <li><Link href="/copper">Copper</Link></li>
                                        </ul>
                                        <a className={`mean-expand ${activeItemSub === 61 ? "mean-clicked" : ""}`} onClick={() => handleActiveItemSub(61)}>
                                            <i className="far fa-plus" />
                                        </a>
                                    </li>
                                    <li>
                                        <Link href="#">Amino Acids</Link>
                                        <ul className="submenu" style={{ display: activeItemSub === 62 ? "block" : "none" }}>
                                            <li><Link href="/methionine">Methionine</Link></li>
                                            <li><Link href="/choline">Choline</Link></li>
                                            <li><Link href="/inositol">Inositol</Link></li>
                                            <li><Link href="/l-carnitine">L-Carnitine</Link></li>
                                        </ul>
                                        <a className={`mean-expand ${activeItemSub === 62 ? "mean-clicked" : ""}`} onClick={() => handleActiveItemSub(62)}>
                                            <i className="far fa-plus" />
                                        </a>
                                    </li>
                                    <li>
                                        <Link href="#">Others</Link>
                                        <ul className="submenu" style={{ display: activeItemSub === 63 ? "block" : "none" }}>
                                            <li><Link href="/sodium-chloride-solution">Sodium Chloride Solution</Link></li>
                                            <li><Link href="/nad">NAD</Link></li>
                                            <li><Link href="/methylene-blue">Methylene Blue</Link></li>
                                        </ul>
                                        <a className={`mean-expand ${activeItemSub === 63 ? "mean-clicked" : ""}`} onClick={() => handleActiveItemSub(63)}>
                                            <i className="far fa-plus" />
                                        </a>
                                    </li>
                                    <li>
                                        <Link href="#">B Complex</Link>
                                        <ul className="submenu" style={{ display: activeItemSub === 64 ? "block" : "none" }}>
                                            <li><Link href="/vitamin-b1">Vitamin B1</Link></li>
                                            <li><Link href="/vitamin-b2">Vitamin B2</Link></li>
                                            <li><Link href="/vitamin-b3">Vitamin B3</Link></li>
                                            <li><Link href="/vitamin-b5">Vitamin B5</Link></li>
                                            <li><Link href="/vitamin-b6">Vitamin B6</Link></li>
                                            <li><Link href="/vitamin-b12">Vitamin B12</Link></li>
                                            <li><Link href="/biotin-b7">Biotin (B7)</Link></li>
                                        </ul>
                                        <a className={`mean-expand ${activeItemSub === 64 ? "mean-clicked" : ""}`} onClick={() => handleActiveItemSub(64)}>
                                            <i className="far fa-plus" />
                                        </a>
                                    </li>
                                    <li>
                                        <Link href="#">Antioxidants</Link>
                                        <ul className="submenu" style={{ display: activeItemSub === 65 ? "block" : "none" }}>
                                            <li><Link href="/n-acetylcysteine">N-Acetylcysteine</Link></li>
                                            <li><Link href="/glutathione">Glutathione</Link></li>
                                            <li><Link href="/alpha-lipoic-acid">Alpha Lipoic Acid</Link></li>
                                            <li><Link href="/coenzyme-q10">Coenzyme Q10</Link></li>
                                        </ul>
                                        <a className={`mean-expand ${activeItemSub === 65 ? "mean-clicked" : ""}`} onClick={() => handleActiveItemSub(65)}>
                                            <i className="far fa-plus" />
                                        </a>
                                    </li>
                                    <li>
                                        <Link href="#">Vitamins</Link>
                                        <ul className="submenu" style={{ display: activeItemSub === 66 ? "block" : "none" }}>
                                            <li><Link href="/vitamin-c">Vitamin C</Link></li>
                                            <li><Link href="/vitamin-D">Vitamin D</Link></li>
                                        </ul>
                                        <a className={`mean-expand ${activeItemSub === 66 ? "mean-clicked" : ""}`} onClick={() => handleActiveItemSub(66)}>
                                            <i className="far fa-plus" />
                                        </a>
                                    </li>
                                </ul>
                                <a className={`mean-expand ${activeItem === 6 ? "mean-clicked" : ""}`} onClick={() => handleActiveItem(6)}>
                                    <i className="far fa-plus" />
                                </a>
                            </li>
                            <li>
                                <Link href="/">Memberships</Link>
                            </li>
                            <li className="mean-last">
                                <Link href="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </nav></div></div>

        </>
    )
}
