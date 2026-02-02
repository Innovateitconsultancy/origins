'use client'
import Link from "next/link"
import MobileMenu from "./MobileMenu"

export default function Offcanvas({
    isOffCanvas,
    handleOffCanvas,
}) {
    return (
        <>
            <div className="fix-area">
                <div className={`offcanvas__info ${isOffCanvas ? "info-open" : ""}`}>
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top mb-4 d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <Link href="/">
                                        <img src="/assets/img/logo/logo.png" alt="logo-img" />
                                    </Link>
                                </div>
                                <div className="offcanvas__close" onClick={handleOffCanvas}>
                                    <button>
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                            <div className="d-block d-lg-none">
                                <MobileMenu />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`offcanvas__overlay ${isOffCanvas ? "overlay-open" : ""}`} onClick={handleOffCanvas} />
        </>

    )
}
