import Layout from "@/components/layout/Layout"
import Hero1 from "@/components/sections/Hero1"
import Marque1 from "@/components/sections/Marque1"
import Service1 from "@/components/sections/Service1"
import Achievement1 from "@/components/sections/Achievement1"
import Team2 from "@/components/sections/Team2"
import About1 from "@/components/sections/About1"
import News1 from "@/components/sections/News1"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Hero1 />
                <Marque1 />
                <Service1 />
                <Achievement1 />
                <Team2 />
                <About1 />
                <News1 />
            </Layout>
        </>
    )
}