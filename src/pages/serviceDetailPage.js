import React from "react";
import Nav from "../components/nav";
import HeroPageServiceDetail from "../componentsServiceDetail/heroPageServiceDetail";
import ServiceDetailText from "../componentsServiceDetail/serviceDetailsText";

function ServiceDetailPage() {
    return ( 
        <div>
            <Nav></Nav>
            <HeroPageServiceDetail></HeroPageServiceDetail>
            <ServiceDetailText></ServiceDetailText>
        </div>
     );
}

export default ServiceDetailPage;