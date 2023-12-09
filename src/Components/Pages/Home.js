import React from "react";

import { Col, Container } from "react-bootstrap";
import Navbar from "./Navbar";
import Newsletter from './Newsletter'

import "./Home.css";
import Hero from "./Hero";
import Products from "./Products";
import Services from './Services'
import NewsLetter2 from "./NewsLetter2";
import Categories from "./Categories";
import SubCategories from "./SubCategories";
import Footer from "./Footer"
const Home = () => {
  return (
    <>
    
      <Navbar/>
      <Hero/>
      <Products/>
      <Newsletter/>
      <Services/>
      <NewsLetter2/>
      <Categories/>
       <SubCategories/>
       <Footer/>
      
    </>
  );
};

export default Home;
