
import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/AboutSection"
import Achievement1 from "@/components/sections/AchievementSection"
import Brand1 from "@/components/sections/Brand1"
import Cta1 from "@/components/sections/Cta1"
import Faq1 from "@/components/sections/Faq1"
import Hero1 from "@/components/sections/HeroSection"
import Marque1 from "@/components/sections/MarqueSection"
import Marque2 from "@/components/sections/Marque2"
import News1 from "@/components/sections/BlogSection"
import Pricing1 from "@/components/sections/Pricing1"
import Project1 from "@/components/sections/Project1"
import Service1 from "@/components/sections/TherapySection"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
export default function Home1Single() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} onePageNav>
                <Hero1 />
                <Marque1 />
                <About1 />
                <Brand1 />
                <Service1 />
                <Achievement1 />
                <Project1 />
                <Marque2 />
                <Testimonial1 />
                <Team1 />
                <Pricing1 />
                <Faq1 />
                <News1 />
                <Cta1 />
            </Layout>
        </>
    )
}