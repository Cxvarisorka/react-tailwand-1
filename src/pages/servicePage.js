import React from "react";
import HeroPage from "../components/heroPages";
import Services from "../components/services";
import Nav from "../components/nav";
import HeroPageService from "../componentsService/heroPage2";
import ServiceServiceComp from "../componentsService/serviceCompService";
import Soul from "../components/soul";
import TechSoul from "../components/techsoul";
import Footer from "../components/footer";
import FooterLast from "../components/footerlast";

function ServicePage() {
    return ( 
        <div>
            <Nav></Nav>
            <HeroPageService></HeroPageService>
            <ServiceServiceComp></ServiceServiceComp>
            <Soul></Soul>
            <TechSoul></TechSoul>
            <Footer></Footer>
            <FooterLast></FooterLast>
        </div>
     );
}

export default ServicePage;