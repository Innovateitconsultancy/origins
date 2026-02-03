import Link from 'next/link'

export default function HeroSection() {
    return (
        <>
            <section className="hero-section fix hero-1 bg-cover">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video"
                >
                    <source
                        src="https://d1wqnyfrrx5uw1.cloudfront.net/reviv-staging/REVIV_Website_Video_1_0db8eb8c18.webm"
                        type="video/webm"
                    />
                </video>
                <div className="hero-content">
                    <div className="hero-button">
                        <Link href="/" className="theme-btn wow fadeInUp" data-wow-delay=".8s">
                            Start Feeling You
                            <i className="fa-solid fa-arrow-right-long" />
                        </Link>
                    </div>
                </div>
            </section>

        </>
    )
}
