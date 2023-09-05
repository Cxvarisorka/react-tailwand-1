import React from "react";
import Nav from '../components/nav';
import HeroPage from "../components/heroPages";
import InfoNum from "../components/counter";
import Comp1 from "../ComponentsAbout/compabout";
import Team from "../components/team";
import Testimonials from "../components/testimonials";
import Footer from "../components/footer";
import FooterLast from "../components/footerlast";




function AboutPage() {
    return ( 
        <div>
            <Nav></Nav>
            <HeroPage></HeroPage>
            <Comp1></Comp1>
            <InfoNum></InfoNum>
            <Team></Team>
            <Testimonials></Testimonials>
            <Footer></Footer>
            <FooterLast></FooterLast>
        </div>
    );
}

export default AboutPage;