import React, { useEffect } from "react";
import '../styles/App.css';
import Planet from "../components/Planet";
import CanvaIphone from "../components/CanvaIphone";
import AppIcon from '../assets/AppIcon';
import Arrow from '../assets/Arrow';
import useScroll from "../hooks/useScroll";
import automaticTitle from '../helpers/automaticTitle';
import { Link } from "react-scroll";
import IutIcon from "../assets/IutIcon";
import WaitScreen from "../components/WaitScreen";
import ValeurCard from "../components/ValeurCard";

const App = () => {

  const scrollPosition = useScroll();
  useEffect(() => {
    automaticTitle(scrollPosition);
  }, [scrollPosition]);

  let opacity;
  if (scrollPosition*scrollPosition*0.00003 > 1)
    opacity = 1
  else
    opacity = scrollPosition*scrollPosition*0.00003

  return (
    <>
      <WaitScreen />
      <header>
        <div className="headerContainer">
          <div className="sideBarContainer">
            <AppIcon className="icon" />
          </div>
          <div className="menuContainer">
            <Link
              className="accueil"
              to="accueil"
              smooth={true}
              offset={-50}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
            >ACCUEIL</Link>
            <Link
              className="presentation"
              to="presentation"
              smooth={true}
              offset={-0.05*window.innerWidth}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
            >PRESENTATION</Link>
            <Link
              className="projets"
              to="projets"
              smooth={true}
              offset={-0.05*window.innerWidth}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
            >PROJETS</Link>
          </div>
          <div className="sideBarContainer">
            <Link
                className="contactText"
                to="contact"
                smooth={true}
                offset={-0.05*window.innerWidth}
                duration={500}
                isDynamic={true}
                ignoreCancelEvents={false}
              >Me contacter</Link>
          </div>
        </div>
      </header>      
      <main>
        <span id="accueil"/>
        <div className="canvaContainer">
          <CanvaIphone scrollPosition={scrollPosition}/>
        </div>
        <Arrow className="arrow"/>
        <span className="animateText1" style={{opacity: opacity}}>DEVELOPPEUR<br/><p className="coloredText">REACT - NATIVE</p></span>
        <span className="animateText2" style={{opacity: opacity/8}}>DEVELOPPEUR<br/><p className="coloredText">REACT - NATIVE</p></span>
        <Planet className="planet1" size={4} position={{x:85, y:20}} rotate={true} />
        <p className="citation">&nbsp;&nbsp;&nbsp;Mon dicton:<br/><span className="citationContenu"><span className="coloredText">Toujours<br/>avancer</span>,<br/>ne rien<br/>regretter</span></p>
        <p className="portfolio">CYRIL DESCHAMPS</p>
        
        <article>
          <div id="presentation" className="delimitationContainer">
            <div className="barContainer">
              <span className="horizontalBar" />
              <p>PRESENTATION</p>
              <span className="horizontalBar" />
            </div>
            <p className="secondLine">A PROPOS DE MOI</p>
          </div>
          <div className="card">
            <IutIcon className="IutIcon"/>
            <span className="verticalBar"></span>
            <span className="textContainer"> 
              <p className="title">Je suis développeur React Native en parallèle de mes études à l'IUT Informatique Lyon 1.</p>
              <p className="paragraphe">Peu importe votre idée et la quantité de travail, c’est avec toute ma bonne volonté que je vous aiderais et vous conseillerais pour mener au succès vos projets.</p>
            </span>
          </div>
          <div className="valeurCardList">
            <ValeurCard
              title="Mon optimiste, mon ambition et mon goût de la réussite" 
              paragraphe="Peu importe votre idée et la quantité de travail, c’est avec toute ma bonne volonté que je vous aiderais et vous conseillerais pour mener au succès vos projets." 
              presetIcon="succes"
              childNb={1}
            />
            <ValeurCard 
              title="Je suis passionnée" 
              paragraphe="La création informatique est ma passion. La possibilité de crée tout ce que l’on veut, seul ou à plusieurs, m’a permis de m’épanouir." 
              presetIcon="passion"
              childNb={2}
            />
            <ValeurCard 
              title="L'amour de la découverte" 
              paragraphe="Ayant toujours été très débrouillard, j’ai appris beaucoup de chose seul et j’ai notamment 'appris à apprendre'. Je ressens le besoin de comprendre tout ce qui m’entoure pour évoluer." 
              presetIcon="decouverte"
              childNb={3}
            />
            <ValeurCard 
              title="Ne pas se précipiter !" 
              paragraphe="Je donne beaucoup d'importance à la communication dans un projet, surtout entre les différentes branches de métier. Je ferais mon maximum pour cerner totalement le besoin de votre application et répondre à vos demandes." 
              presetIcon="communication"
              childNb={4}
            />
          </div>
        </article>

        <article>
          <div id="projets" className="delimitationContainer">
            <div className="barContainer">
              <span className="horizontalBar" />
              <p>MES PROJETS</p>
              <span className="horizontalBar" />
            </div>
            <div className="card">
            <img src="./assets/react_image.png" alt="react_img" className="reactImage"/>
            <span className="textContainer"> 
              <p className="title">EXPOSITION DE MES REALISATIONS</p>
              <p className="paragraphe">Voici les différents projets sur lesquels j'ai pu travailler.</p>
			        <a href="https://github.com/CyrilDesch" target="_blank" class="btn-si btn-github" rel="noreferrer" >Mon GitHub</a>
            </span>
          </div>
          </div>
        </article>
        
        <article>
          <div id="contact" className="delimitationContainer">
            <div className="barContainer">
              <span className="horizontalBar" />
              <p>CONTACT</p>
              <span className="horizontalBar" />
            </div>
          </div>
        </article>
      </main>
    </>
  )
}

export default App;