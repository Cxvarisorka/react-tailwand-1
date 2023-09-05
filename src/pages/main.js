import React from 'react';
import Blog from '../components/blogs';
import Clients from '../components/clients';
import InfoNum from '../components/counter';
import Footer from '../components/footer';
import FooterLast from '../components/footerlast';
import Idea from '../components/haveaidea';
import Hero from '../components/hero';
import Nav from '../components/nav'
import Services from '../components/services';
import Soul from '../components/soul';
import Team from '../components/team';
import TechSoul from '../components/techsoul';
import Testimonials from '../components/testimonials';


function Main() {
  return (
    <div className="Main">
      <Nav></Nav>
      <Hero></Hero>
      <Services></Services>
      <Soul></Soul>
      <TechSoul></TechSoul>
      <InfoNum></InfoNum>
      <Team></Team>
      <Testimonials></Testimonials>
      <Idea></Idea>
      <Blog></Blog>
      <Clients></Clients>
      <Footer></Footer>
      <FooterLast></FooterLast>
    </div>
  );
}

export default Main;
