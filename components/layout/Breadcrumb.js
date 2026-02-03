import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            <div className="breadcrumb-wrapper">
                <div className="container">
                    <div className="page-heading">
                        <h1 className="wow fadeInUp" data-wow-delay=".3s">{breadcrumbTitle}</h1>
                        {/* <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                            <li>
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <i className="fas fa-chevron-right" />
                            </li>
                            <li>
                                {breadcrumbTitle}
                            </li>
                        </ul> */}
                    </div>
                </div>
            </div>

        </>
    )
}
