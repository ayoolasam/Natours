import React from "react";




import Navigation from "../components/Navigation";
import Popup from "../components/popup/Popup";
import Header from "../components/header/Header";
import About from "../components/About/About";
import Features from "../components/features/Features";
import Card from "../components/Card/Card";
import Stories from "../components/Stories/Stories";
import Footer from "../components/Footer/Footer";
import { Form } from "../components/Form/Form";


const Natours = () => {
  return (
    <div>
      <Navigation/>
     
     <Header/>

      <main>
      <About/>

        <Features/>


        
        //card turning
       <Card/>


     <Stories/>
     {/* form  */}

       <Form/>
      </main>
     <Footer/>
<Popup/>
    </div>
  );
};

export default Natours;
