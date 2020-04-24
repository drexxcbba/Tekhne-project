import React from 'react';
import Article from './article'
import '../componentsCss/index.css';
import Header from './header'
import imaOne from '../images/article1.jpg';
import imaTwo from '../images/article2.jpg';


function Index() {
  let title1 = "Wilstermann's shoping store";
  let parrafo1 = "Pagina para comprar y hacer pedidos a la pagina oficial de Wiltersmann recuerde que no es la pagina ofical.";
  let tittle2 = "MISION";
  let tittle3 = "VISION";
  let parrafo2 = "“Somos más que un equipo de fútbol, somos una institución aglutinadora, que se encarga de fomentar" 
  +"y desarrollar en nuestros deportistas y asociados en general el deporte competitivo, formativo y recreativo;"
  +" promoviendo nuestros valores asegurando la sostenibilidad financiera del club”.";
  let parrafo3 = "“Ser una institución, una organización, de amplia proyección deportiva,"
  + "sólida, exitosa, innovadora, referente e integradora,"
  +"reconocida en el ámbito deportivo local, nacional e internacional”.";
  return (
    <div className = "index">
        <Header title={title1} parrafo={parrafo1} />
        <div className="part2">
          <img id="imaOne" src= {imaOne} alt="" />
          <Article title = {tittle2} parrafo = {parrafo2}/>
        </div>
        <div className="part3">
          <Article title = {tittle3} parrafo = {parrafo3}/>
          <img id="imaTwo" src= {imaTwo} alt="" />
        </div>
    </div> 
  );
}

export default Index;
